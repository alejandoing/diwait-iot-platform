import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Block } from '../../atoms/Block'
import { IconText } from './../../molecules/IconText'

const Wrapper = styled(Block)`
  background: ${palette(2)};
  padding: 10px 20px;
`

export const SubHeader = (props) => {
  return (
    <Wrapper {...props}>
      <IconText size="smallx2" icon="collage" pointer={false}>Dashboard</IconText>
    </Wrapper>
  )
}

SubHeader.defaultProps = {
  palette: "primary"
}