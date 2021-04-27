import React from 'react'
import { updateBalance } from './actions/updateBalance'
import { credit } from './actions/credit'
import { debit } from './actions/debit'
import { getBalanceWithTax } from './actions/getBalanceWithTax'
import { connect } from 'react-redux'

interface Props {
  balance: number
  updateBalance: (amount: number) => void
  credit: (amount: number) => void
  debit: (amount: number) => void
  getBalanceWithTax: () => void
}

const Bank: React.FC<Props> = ({ balance, updateBalance, credit, debit, getBalanceWithTax }) => {
  return (
    <div className="Bank">
      <div>
        <h3>Current Balance: <span>{balance}</span></h3>
      </div>
      <button onClick={() => { updateBalance(1000) }}>Update Balance</button>
      <button onClick={() => { credit(200.0) }}>Credit</button>
      <button onClick={() => { debit(100.0) }}>Debit</button>
      <button onClick={() => { getBalanceWithTax() }}>Get Balance</button>
    </div>
  )
}

interface State {
  creditCard: Props
}

const mapStateToProps = (state: State) => ({
  balance: state.creditCard.balance
})

const mapDispatchToProps = (dispatch: any) => ({
  updateBalance: () => dispatch(updateBalance(1000)),
  credit: () => dispatch(credit(200.0)),
  debit: () => dispatch(debit(100.0)),
  getBalanceWithTax: () => dispatch(getBalanceWithTax())
})

export default connect(mapStateToProps, mapDispatchToProps)(Bank)
