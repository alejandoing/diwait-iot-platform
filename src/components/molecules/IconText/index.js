import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from '../../atoms/Icon'
import { Text } from '../../atoms/Text'
import { Block } from '../../atoms/Block'

const StyledIcon = styled(Icon)`
  @media screen and (max-width: 420px) {
    margin: ${({ responsive }) => responsive && 0};
  }
`

const Wrapper = styled(Block)`
  grid-template: auto / auto 2fr;
  align-items: center;
  gap: .5em;
`

export const IconText = ({
  height, icon, right, children, pointer, ...props
}) => {
  const iconElement = (
    <StyledIcon
      height={height}
      icon={icon}
      right={right}
      color={props.color}
      size={props.size}
      pointer={pointer}
      palette={props.palette}
      reverse={props.reverse}
      {...props}
    />
  )
  return (
    <Wrapper {...props}>
      {right || iconElement}
      <Text {...props}>{children}</Text>
      {right && iconElement}
    </Wrapper>
  )
}

IconText.propTypes = {
  icon: PropTypes.string.isRequired,
  height: PropTypes.number,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  responsive: PropTypes.bool,
  right: PropTypes.bool,
  children: PropTypes.node,
}