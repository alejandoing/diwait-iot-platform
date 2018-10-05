import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { IconText } from './../../molecules/IconText'

const InnerWrapper = styled.div`
  display: grid;
  background: ${palette(2)};
  grid-template: auto / auto;
  gap: 20px;
  padding: 10px;
  & svg {
    cursor: pointer;
  }
`

export const SubHeader = (props) => {
  return (
    <InnerWrapper {...props}>
      <IconText size="medium" icon="collage">Dashboard</IconText>
    </InnerWrapper>
  )
}

SubHeader.defaultProps = {
  palette: "primary"
}