import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

export const Block = styled.div`
  display: grid;
  gap: 20px;
  font-family: ${font('primary')};
  background-color: ${ifProp('dark', palette(4, true), 'transparent')};
  color: ${palette({ grayscale: 0 }, 1)};
`

Block.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,
}

Block.defaultProps = {
  palette: 'grayscale',
}