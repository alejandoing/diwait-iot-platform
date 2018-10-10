import React from 'react'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import theme from './themes/default'

import { Block } from './../components/atoms/Block'
import { Drawer } from './organisms/Drawer'
import { SubHeader } from './organisms/SubHeader'
import { MetricCard } from './molecules/MetricCard'

import HeaderContainer from './../containers/Header'

injectGlobal`
  body {
    margin: 0;
  }
`

const Layout = styled(Block)`
  grid-template: repeat(3, auto) / 260px auto;
  grid-template-areas:  "drawer header"
                        "drawer subheader"
                        "drawer content";
  gap: 0;
  & .Header {
    grid-area: header;
  }
  & .Drawer {
    grid-area: drawer
  }
  & .SubHeader {
    grid-area: subheader
  }
`

const Content = styled(Block)`
  grid-template: auto / repeat(4, 1fr);
  grid-area: content;
  padding: 20px 50px;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <HeaderContainer className="Header"/>
        <Drawer className="Drawer"/>
        <SubHeader className="SubHeader"/>
        <Content>
          <MetricCard palette="success" value={14} icon="store">Locals</MetricCard>
          <MetricCard palette="danger" value={19} icon="router-wireless">Devices</MetricCard>
          <MetricCard palette="secondary" value={89} icon="chart-timeline">Readings</MetricCard>
          <MetricCard palette="alert" value={521} icon="alert-octagram">Alerts</MetricCard>
        </Content>
      </Layout>
    </ThemeProvider>
  )
}

export default App
