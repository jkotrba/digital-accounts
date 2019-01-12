import React, { Component } from 'react'
import AccountDetail from './AccountDetail'

const fakeAccounts = [
  { id: 1, name: 'Account 1', balance: 12.00 },
  { id: 2, name: 'Account 2', balance: 1.00 },
  { id: 3, name: 'Account 3', balance: 18.00 },
  { id: 4, name: 'Account 4', balance: 13.00 },
  { id: 5, name: 'Account 5', balance: 9.00 },
]


class AccountsTable extends Component {

  constructor(props) {
    super(props)
    this.apiUrl = props.apiUrl
    this.state = {
      accounts: [],
      selectedAccount: {}
    }

    this.getAccounts = this.getAccounts.bind(this)
    this.selectAccount = this.selectAccount.bind(this)
  }

  getAccounts() {
    // fetch(`${this.apiUrl}/accounts`)
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState( { accounts: json.data.accounts})
    //   })
    this.setState( { accounts: fakeAccounts })
  }

  selectAccount(event, account) {
    this.setState( { selectedAccount: account })
  }

  componentDidMount() {
    this.getAccounts()
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            { this.state.accounts.map(a => {
              return (
                <tr key={a.id} onClick={ e => this.selectAccount(e, a)}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.balance}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <AccountDetail account={this.state.selectedAccount} />
      </div>
    )
  }
}

export default AccountsTable
