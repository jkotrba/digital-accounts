import React, { Component } from 'react'

function DisplayAccount(props) {
  if(props.account != null && props.account.name != null) {
    return (
      <p>Selected Account: {props.account.name}</p>
    )
  }
  return (
    <p></p>
  )
}


class AccountDetail extends Component {
  constructor(props) {
    super(props)
    this.state = { value: props.account.name}




    this.accountUpdate = this.accountUpdate.bind(this)

    this.nameChange = this.nameChange.bind(this)
    this.accountUpdate = this.accountUpdate.bind(this)

  }

  accountUpdate(e) {
  }

  nameChange(e) {
    this.setState({value: e.target.value})
  }

  render(){
    return (
      <div>
        <form onSubmit={e => this.accountUpdate(e)}>
          Account Name:
          <input type="text" value={this.state.value} onChange={e => this.nameChange(e)} />
          <input type="submit" value="Submit" />
        </form>
        <DisplayAccount account={this.props.account} />
      </div>

    )
  }
}

export default AccountDetail
