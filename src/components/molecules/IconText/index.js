import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { Icon } from '../../atoms/Icon'
import { Text } from '../../atoms/Text'

const StyledIcon = styled(Icon)`
  @media screen and (max-width: 420px) {
    margin: ${({ responsive }) => responsive && 0};
  }
`

const styles = css`
  display: grid;
  grid-template: auto / auto 2fr;
  align-items: center;
  gap: .5em;
`

const Container = styled.div`${styles}`

export const IconText = ({
  height, icon, right, children, ...props
}) => {
  const iconElement = (
    <StyledIcon
      height={height}
      icon={icon}
      right={right}
      color={props.color}
      size={props.size}
      pointer={props.pointer}
      palette={props.palette}
      reverse={props.reverse}
    />
  )
  return (
    <Container>
      {right || iconElement}
      <Text {...props}>{children}</Text>
      {right && iconElement}
    </Container>
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