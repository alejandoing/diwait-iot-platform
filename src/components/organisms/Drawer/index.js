import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Text } from './../../atoms/Text'
import { IconText } from './../../molecules/IconText'

const InnerWrapper = styled.div`
  display: grid;
  width: 300px;
  height: 84.8vh;
  background: ${palette(1)};
  grid-template: .3fr .4fr / auto;
  gap: 20px;
  padding: 30px;
  
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
        <Text bold className="Subtitle">Pages</Text>
        <IconText icon="collage" size="smallx2">Dashboard</IconText>
        <IconText icon="router-wireless" size="smallx2">Devices</IconText>
        <IconText icon="chart-areaspline" size="smallx2">Analytics</IconText>
      </div>
      <div className="Solutions">
        <Text bold className="Subtitle">Solutions</Text>
        <IconText icon="power-plug" size="smallx2">ON/OFF</IconText>
        <IconText icon="puzzle" size="smallx2">MIL</IconText>
        <IconText icon="target" size="smallx2">GeoTracker</IconText>
        <IconText icon="fridge" size="smallx2">Smart Freezer</IconText>
      </div>
    </InnerWrapper>
  )
}

Drawer.defaultProps = {
  palette: "primary"
}