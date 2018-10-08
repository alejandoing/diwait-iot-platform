import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Text } from './../../atoms/Text'
import { Block } from './../../atoms/Block'
import { IconText } from './../../molecules/IconText'

const InnerWrapper = styled(Block)`
  background: ${palette(1)};
  grid-template: 250px 300px / auto;
  padding: 30px;
  position: fixed;
  min-height: 100%;
  width: 200px;
  
  & .Pages {
    display: grid;
    grid-template: repeat(4, auto) / auto;
  }
  & .Solutions {
    display: grid;
    grid-template: repeat(4, auto) / auto;    
  }
  & div:not(.Subtitle) {
    padding-left: 10px;
    cursor: pointer;
    & div:hover {
      background: rgba(9, 30, 66, 0.42);
      border-radius: 5px;
    }
  }
`

export const Drawer = (props) => {
  return (
    <InnerWrapper {...props}>
      <div className="Pages">
        <Text bold className="Subtitle" size="smallx2">DiwaIoT Platform</Text>
        <IconText icon="collage">Dashboard</IconText>
        <IconText icon="router-wireless">Devices</IconText>
        <IconText icon="chart-areaspline">Analytics</IconText>
      </div>
      <div className="Solutions">
        <Text bold className="Subtitle" size="smallx2">Solutions</Text>
        <IconText icon="power-plug">ON/OFF</IconText>
        <IconText icon="puzzle">MIL</IconText>
        <IconText icon="target">GeoTracker</IconText>
        <IconText icon="fridge">Smart Freezer</IconText>
      </div>
    </InnerWrapper>
  )
}

Drawer.defaultProps = {
  palette: "primary"
}