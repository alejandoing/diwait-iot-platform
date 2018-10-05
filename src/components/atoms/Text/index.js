import styled from 'styled-components'
import { font } from 'styled-theme'
import { ifProp, switchProp, prop } from "styled-tools";

export const Text = styled.span`
  font-family: ${font('primary')};
  font-size: ${switchProp(prop("size"), {
    small: prop("theme.sizes.small"),
    smallx2: prop("theme.sizes.smallx2"),
    medium: prop("theme.sizes.medium"),
    large: prop("theme.sizes.large")
  })};
  color: ${prop("color", "white")};
  font-weight: ${ifProp({ bold: true }, "bold")};
`;

Text.defaultProps = {
  palette: 'grayscale',
  size: 'small',
  color: 'white',
  bold: false
}