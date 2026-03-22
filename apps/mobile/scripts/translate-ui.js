const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const INPUT_DIR = '/Users/yuvamrajput/Downloads/stitch_divya_splash_screen';
const OUTPUT_DIR = path.join(__dirname, '../src/generated_screens');

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function toCamelCase(str) {
  return str.replace(/_([a-z0-9])/g, g => g[1].toUpperCase()).replace(/^./, g => g.toUpperCase());
}

function processNode($, node) {
  if (node.type === 'text') {
    const text = node.data.replace(/\s+/g, ' ').trim();
    return text ? `{${JSON.stringify(text)}}` : '';
  }
  if (node.type !== 'tag') return '';

  const tag = node.name.toLowerCase();
  
  // Strip hidden inputs or pure meta tags
  if (['style', 'script', 'link', 'meta'].includes(tag)) return '';

  // Map HTML to RN
  let rnTag = 'View';
  if (['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'label', 'strong', 'b'].includes(tag)) rnTag = 'Text';
  if (['img'].includes(tag)) rnTag = 'Image';
  if (['button', 'a'].includes(tag)) rnTag = 'TouchableOpacity';
  if (['svg'].includes(tag)) rnTag = 'View'; // Basic fallback for SVGs
  if (['path', 'g', 'circle', 'defs'].includes(tag)) return ''; // Strip deep SVG elements

  let props = '';

  if (node.attribs) {
    if (node.attribs.class) {
      // Clean up Tailwind generic web stuff that RN doesn't support directly
      let classes = node.attribs.class
        .replace(/min-h-screen/g, 'flex-1')
        .replace(/h-screen/g, 'flex-1')
        .replace(/w-screen/g, 'w-full')
        .replace(/overflow-hidden/g, '')
        .replace(/selection:[^\s]+/g, '')
        .replace(/group-[a-z]+:[^\s]+/g, '')
        .trim();
      if (classes) {
        props += ` className="${classes}"`;
      }
    }
    if (tag === 'img' && node.attribs.src) {
      if (node.attribs.src.startsWith('data:image')) {
          props += ` source={{ uri: "https://via.placeholder.com/150" }}`;
      } else {
          props += ` source={{ uri: "${node.attribs.src}" }}`;
      }
    }
    // Convert style attributes naively (highly brittle, mostly skip or map simple inline)
    if (node.attribs.style && rnTag === 'Text') {
      if (node.attribs.style.includes('letter-spacing')) {
        let match = node.attribs.style.match(/letter-spacing:\s*([0-9.]+)px/);
        if (match) props += ` style={{ letterSpacing: ${match[1]} }}`;
      }
    }
  }

  let childrenJSX = '';
  if (node.children && node.children.length > 0) {
    childrenJSX = node.children.map(c => processNode($, c)).join('');
  }

  if (rnTag === 'Image' || (rnTag === 'View' && tag === 'svg')) return `\n<${rnTag}${props} />`;

  return `\n<${rnTag}${props}>${childrenJSX}</${rnTag}>`;
}

const folders = fs.readdirSync(INPUT_DIR);
let count = 0;

folders.forEach(folder => {
  const htmlPath = path.join(INPUT_DIR, folder, 'code.html');
  if (!fs.existsSync(htmlPath)) return;

  const html = fs.readFileSync(htmlPath, 'utf8');
  const $ = cheerio.load(html);
  
  // Find the main body or wrapper
  const body = $('body');
  
  body.find('script, style, link').remove();

  const rootStructure = processNode($, body[0]);
  
  const componentName = toCamelCase(folder);

  const reactNativeCode = `import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function ${componentName}() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1 }}>
      ${rootStructure}
    </ScrollView>
  );
}
`;

  fs.writeFileSync(path.join(OUTPUT_DIR, `${componentName}.tsx`), reactNativeCode);
  count++;
});

console.log(`Successfully translated ${count} screens from HTML to NativeWind JSX!`);
