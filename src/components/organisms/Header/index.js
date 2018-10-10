import React, { Component } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { IconText } from './../../molecules/IconText'
import { Block } from './../../atoms/Block'
import { Icon } from './../../atoms/Icon'

const Wrapper = styled(Block)`
  grid-template: auto / 2fr repeat(4, auto);
  gap: 10px;
  padding: 20px;
  background: ${palette(0)};
`

const DrawerIcon = styled(IconText)`
  user-select: none;
  & svg {
    position: relative;
    top: .1px;
  }
`

const UserText = styled(IconText)`
  justify-self: end;
`

const NavIcon = styled(Icon)`
  align-self: center;
  & :hover {
    fill: black;
  }
`

export default class Header extends Component {
  handleDrawer = () => {
    console.log("ACTION")
    this.props.actions.visibilityDrawer(!this.props.drawer, this.props.keyboardDrawer)
  }

  render() {
    const { props, handleDrawer } = this
    return (
      <Wrapper {...props}>
        <DrawerIcon 
          size="medium"
          icon={props.keyboardDrawer} 
          onClick={handleDrawer}>
          DiwaIoT Platform
        </DrawerIcon>
        <NavIcon icon="bell" size="smallx2" />
        <NavIcon icon="settings" size="smallx2" />
        <Icon icon="power-on" size="medium" pointer={false} />
        <UserText right size="smallx2" icon="account" pointer={false}>Alejandro Uray</UserText>
      </Wrapper>
    )
  }
}

Header.defaultProps = {
  palette: "primary"
}