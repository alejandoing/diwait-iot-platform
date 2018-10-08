import coolorsToHex from 'coolors-to-hex'
import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: coolorsToHex('https://coolors.co/013440-1a535c-2e626a-417077-527d83'),
  secondary: coolorsToHex('https://coolors.co/011627-182b3a-2d3e4b-404f5b-53616b'),
  danger: coolorsToHex('https://coolors.co/f44336-f55448-f56358-f57167-f67f76'),
  alert: coolorsToHex('https://coolors.co/ff9f1c-ffa730-ffb045-ffb959-ffc16e'),
  success: coolorsToHex('https://coolors.co/388e3c-4a984d-7cc47f-9fd4a1-c8e6c9'),
  grayscale: coolorsToHex('https://coolors.co/3f3f3f-dad6d6-c6c5b9-f4f4eb-9b9b93')
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
    large: '5em',
  }
}

export default theme