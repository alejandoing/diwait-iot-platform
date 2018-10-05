import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { IconText } from './../../molecules/IconText'
import { Icon } from './../../atoms/Icon'

const InnerWrapper = styled.div`
  display: grid;
  background: ${palette(0)};
  grid-template: auto / 2fr auto auto auto auto;
  align-items: center;
  gap: 20px;
  padding: 20px;
  & div:last-child {
    justify-self: end;
  }
  & svg {
    cursor: pointer;
  }
`

export const Header = (props) => {
  return (
    <InnerWrapper {...props}>
      <IconText size="medium" icon="chevron-left">DiwaIoT Platform</IconText>
      <Icon icon="bell" />
      <Icon icon="settings" />
      <Icon icon="power-on" size="medium" pointer={false}/>
      <IconText right size="smallx2" icon="account">Alejandro Uray</IconText>
    </InnerWrapper>
  )
}

Header.defaultProps = {
  palette: "primary"
}