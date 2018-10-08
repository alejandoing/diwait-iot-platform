import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, prop, switchProp, ifProp } from 'styled-theme'

import { IconText } from '../../molecules/IconText'
import { Text } from '../../atoms/Text'
import { Block } from '../../atoms/Block'

const Wrapper = styled(Block)`
  background: ${palette(1)};
  justify-items: center;
`

const StyledIconText = styled(IconText)`
  font-size: 2em;
`

const StyledText = styled(Text)`
  padding: .5em;
`

export const MetricCard = (props) => {
  return (
    <Wrapper {...props}>
      <StyledIconText size="large" icon={props.icon}>{props.value}</StyledIconText>
      <StyledText size="smallx3">{props.children}</StyledText>
    </Wrapper>
  )
}

MetricCard.defaultProps = {
  palette: "primary"
}