import React, { Component } from 'react'
import AccountsTable from './AccountsTable'
import AccountDetail from './AccountDetail'

const fakeAccounts = [
  { id: 1, name: 'Account 1', balance: 12.00 },
  { id: 2, name: 'Account 2', balance: 1.00 },
  { id: 3, name: 'Account 3', balance: 18.00 },
  { id: 4, name: 'Account 4', balance: 13.00 },
  { id: 5, name: 'Account 5', balance: 9.00 },
]

class AccountsContainer extends Component {
  constructor(props) {
    super(props)

    this.apiUrl = props.apiUrl
    this.state = {
      accounts: [],
      selectedAccount: { }
    }

    this.getAccounts = this.getAccounts.bind(this)
    this.handleAccountSelected = this.handleAccountSelected.bind(this)
  }

  getAccounts() {
    // fetch(`${this.apiUrl}/accounts`)
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState( { accounts: json.data.accounts})
    //   })

    this.setState( { accounts: fakeAccounts })

  }

  componentDidMount() {
    this.getAccounts()
  }

  handleAccountSelected(account) {
    this.setState({selectedAccount: account})
  }

  render() {

    return (
      <div>
        <AccountsTable accounts={this.state.accounts} onAccountSelected={this.handleAccountSelected} />
        {/* <AddAccount onAccountAdded={this.handleAccountAdded} /> */}
        { this.state.selectedAccount.id != null ? <AccountDetail account={this.state.selectedAccount} /> : null }
      </div>
    )
  }
}

export default AccountsContainer
