declare module '@expo/vector-icons' {
  import * as React from 'react';
  import { TextProps, ViewStyle, StyleProp } from 'react-native';

  export class MaterialCommunityIcons extends React.Component<{
    name: string;
    size?: number;
    color?: string;
    style?: StyleProp<ViewStyle>;
  } & TextProps> {}

  export class MaterialIcons extends React.Component<{
    name: string;
    size?: number;
    color?: string;
    style?: StyleProp<ViewStyle>;
  } & TextProps> {}
}
