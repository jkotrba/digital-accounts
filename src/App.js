import React, { Component } from 'react'
import './App.css'
import AccountsContainer from './components/AccountsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        </header>
        <main>
          <AccountsContainer />
        </main>
      </div>
    )
  }
}

export default App
