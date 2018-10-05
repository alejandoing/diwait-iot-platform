import React, { Component } from 'react';
import { Header } from './components/organisms/Header'
import { Drawer } from './components/organisms/Drawer'
import { ThemeProvider } from 'styled-components'
import theme from './components/themes/default'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Drawer palette="primary" />
        </div>
      </ThemeProvider>
    )
  }
}

export default App
