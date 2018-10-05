import React, { Component } from 'react';
import { Header } from './components/organisms/Header'
import { Drawer } from './components/organisms/Drawer'
import { SubHeader } from './components/organisms/SubHeader'
import styled, { ThemeProvider } from 'styled-components'
import theme from './components/themes/default'

const Layout = styled.div`
  display: grid;
  grid-template: auto .1fr auto / auto auto 1fr;
`

const StyledHeader = styled(Header)`
  grid-row: 1 / 2;
  grid-column: 1 / 4;
`

const StyledDrawer = styled(Drawer)`
  grid-row: 2 / 4;
  grid-column: 1 / 2;
`

const StyledSubHeader = styled(SubHeader)`
  grid-row: 2 / 3;
  grid-column: 2 / 4;
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <StyledHeader />
          <StyledDrawer palette="primary" />
          <StyledSubHeader />
        </Layout>
      </ThemeProvider>
    )
  }
}

export default App
