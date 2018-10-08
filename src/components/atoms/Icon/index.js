import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ifProp, switchProp, prop } from 'styled-tools'

const Wrapper = styled.span`
  display: inline-block;
  font-size: ${switchProp(prop("size"), {
    small: prop("theme.sizes.icon.small"),
    smallx2: prop("theme.sizes.icon.smallx2"),
    smallx3: prop("theme.sizes.icon.smallx3"),
    medium: prop("theme.sizes.icon.medium"),
    large: prop("theme.sizes.icon.large")
  })};
  cursor: ${ifProp({ pointer: true }, "pointer", "default")};
  width: 1em;
  height: 1em;
  margin: 0.1em;
  box-sizing: border-box;
  & > svg {
    position: relative;
    bottom: 3px;
    width: 100%;
    height: 100%;
    fill: ${prop("color", "white")};
    stroke: ${prop("color", "white")};
  }
`

export const Icon = ({ icon, ...props }) => {
  const svg = require(`!raw-loader!./svg/${icon}.svg`)
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  size: PropTypes.string,
  pointer: PropTypes.bool
}

Icon.defaultProps = {
  size: 'small',
  pointer: true
}