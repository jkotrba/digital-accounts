import React, { Component } from 'react'


const AccountsTable =(props) => {
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
            { props.accounts.map(a => {
              return (
                <tr key={a.id} onClick={() => props.onAccountSelected(a)}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.balance}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
}

export default AccountsTable
