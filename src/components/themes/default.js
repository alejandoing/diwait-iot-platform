import coolorsToHex from 'coolors-to-hex'
import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: coolorsToHex('https://coolors.co/013440-1A535C-676C73-e71d36-ff9f1c'),
  secondary: coolorsToHex('https://coolors.co/c2185b-e91e63-f06292-f48caf-f8bbd0'),
  danger: coolorsToHex('https://coolors.co/d32f2f-f44336-f8877f-f9a7a1-ffcdd2'),
  alert: coolorsToHex('https://coolors.co/ffa000-ffc107-ffd761-ffecb3-fff2ce'),
  success: coolorsToHex('https://coolors.co/388e3c-4caf50-7cc47f-9fd4a1-c8e6c9'),
  grayscale: ['#212121', '#616161', '#9e9e9e', '#bdbdbd', '#e0e0e0', '#ffffff']
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: 'Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif'
}

theme.sizes = {
  small: '1em',
  smallx2: '1.2em',
  smallx3: '1.4em',
  medium: '1.6em',
  large: '2em',
  icon: {
    small: '1.4em',
    smallx2: '1.6em',
    smallx3: '2em',
    medium: '2.2em',
    large: '8.4em',
  }
}

export default theme