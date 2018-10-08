import React, { Component } from 'react'
import { Header } from './organisms/Header'
import { Drawer } from './organisms/Drawer'
import { SubHeader } from './organisms/SubHeader'
import { MetricCard } from './molecules/MetricCard'

import styled, { ThemeProvider } from 'styled-components'
import theme from './themes/default'

const Layout = styled.div`
  display: grid;
  grid-template-areas:  "drawer header"
                        "drawer subheader"
                        "drawer content";
  grid-template-columns: 260px auto;
  grid-template-rows: repeat(3, auto);
  & .Content {
    display: grid;
    gap: 20px;
    grid-template: auto / repeat(4, 1fr);
    grid-area: content;
    padding: 20px 50px;
  }
`

const StyledHeader = styled(Header)`
  grid-area: header;
`

const StyledDrawer = styled(Drawer)`
  grid-area: drawer;
`

const StyledSubHeader = styled(SubHeader)`
  grid-area: subheader;
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <StyledHeader dark/>
          <StyledDrawer />
          <StyledSubHeader dark/>
          <div className="Content">
            <MetricCard palette="success" value={14} icon="store">Locals</MetricCard>
            <MetricCard palette="danger" value={19} icon="router-wireless">Devices</MetricCard>
            <MetricCard palette="secondary" value={89} icon="chart-timeline">Readings</MetricCard>
            <MetricCard palette="alert" value={521} icon="alert-octagram">Alerts</MetricCard>
          </div>
        </Layout>
      </ThemeProvider>
    )
  }
}

export default App
