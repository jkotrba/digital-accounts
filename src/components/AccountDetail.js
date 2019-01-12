import React from 'react'

const AccountDetail = (props) => {
  return (
    <div className="account-detail">
      <p>{props.account.name}</p>
    </div>
  )
}
export default AccountDetail
