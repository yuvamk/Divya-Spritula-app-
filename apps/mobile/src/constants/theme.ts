export const Colors = {
  // Core Spiritual Palette
  primary:           '#AB2E15',   // Saffron — devotion, sacred fire
  primaryContainer:  '#CD462B',   // Glowing ember
  secondary:         '#A43A37',   // Maroon — authority, temple curtains
  secondaryContainer:'#FD7C75',
  tertiary:          '#855000',   // Temple Gold — prosperity
  tertiaryContainer: '#A76500',   
  accent:            '#BA7517',   // Signature Icon Gold
  
  // Legacy aliases
  maroon: '#A43A37',
  maroonDeep: '#872C2A',
  gold: '#855000',

  // Surface Hierarchy (The "No-Line" Rule)
  light: {
    background:      '#FAF9F6',   // Foundation (Base)
    bg:              '#FAF9F6',   // Legacy alias
    surface:         '#FAF9F6',
    surfaceLow:      '#F4F3F1',   // Secondary layer
    surfaceHigh:     '#E9E8E5',   // Highlight layer
    surfaceHighest:  '#E3E2E0',   // Interactive layer
    surfaceLowest:   '#FFFFFF',   // Card lift
    onSurface:       '#1A1C1A',
    onSurfaceVar:    '#59413C',   // Editorial body
    textPrimary:     '#1A1C1A',   // Legacy aliases
    textSecondary:   '#59413C',
    textTertiary:    '#8D716B',
    outline:         '#8D716B',
    outlineVar:      'rgba(141, 113, 107, 0.15)', // The "Ghost Border"
    divider:         'rgba(141, 113, 107, 0.15)', // Legacy alias
  },

  dark: {
    background:      '#0F0D1A',   // Deep Night (Silent Temple)
    bg:              '#0F0D1A',   // Legacy alias
    surface:         '#0F0D1A',
    surfaceLow:      '#161424',
    surfaceHigh:     '#1F1C30',
    surfaceHighest:  '#28253C',
    surfaceLowest:   '#1A172B',
    onSurface:       '#F2F0EC',
    onSurfaceVar:    '#9E9B96',
    textPrimary:     '#F2F0EC',   // Legacy aliases
    textSecondary:   '#9E9B96',
    textTertiary:    '#4A465C',
    outline:         '#4A465C',
    outlineVar:      'rgba(74, 70, 92, 0.2)',
    divider:         'rgba(74, 70, 92, 0.2)', // Legacy alias
    maroon:          '#A43A37',
    maroonDeep:      '#872C2A',
    gold:            '#855000',
  },

  // Functional
  error:             '#BA1A1A',
  success:           '#0F6E56',
}

export const Gradients = {
  saffron: ['#AB2E15', '#CD462B'], // Signature Action Gradient
  glass: (opacity = 0.8) => [`rgba(250, 249, 246, ${opacity})`, `rgba(244, 243, 241, ${opacity})`],
}

export const Typography = {
  fonts: {
    display:    'NotoSerif-Bold',      // Spiritual/Editorial impact
    headline:   'NotoSerif-SemiBold',
    title:      'Inter-SemiBold',      // Functional navigation
    body:       'Inter-Regular',       // Legibility
    label:      'Inter-Medium',
    amount:     'RobotoMono-Bold',     // Precision/Trust
  },
  sizes: {
    displayLg: 48,  // 3.5rem equivalent
    displayMd: 32,
    h1: 24,
    h2: 20,
    h3: 18,
    body: 15,
    label: 13,
    caption: 11,
    tiny: 10,       // Legacy alias
  }
}

export const Spacing = {
  xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48,
  editorial: 44, // Signature spacing-8 (2.75rem)
}

export const Radius = {
  none: 0,
  sm: 8,
  md: 12,        // Standard button
  lg: 16,        // Standard card
  xl: 24,
  xxl: 32,
  arch: {        // The "Sacred Arched Card" Motif
    top: 48,
    bottom: 16
  },
  pill: 100,
  full: 9999,    // Legacy alias
}

export const Shadow = {
  ambient: {    // Mimics natural light on raised surface
    shadowColor: '#1A1C1A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 40,
    elevation: 4,
  },
  card: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  sm: {         // Legacy alias
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  }
}

