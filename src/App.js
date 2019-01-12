import React, { Component } from 'react'
import './App.css'
import AccountTable from './components/AccountsTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        </header>
        <main>
          <AccountTable />
        </main>
      </div>
    )
  }
}

export default App
