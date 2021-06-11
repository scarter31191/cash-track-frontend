import React from 'react'
import TransactionInput from '../components/TransactionInput'
import Transactions from '../components/Transcations'

class TransactionContainer extends React.Component {

    render() {
        // debugger;
        if (this.props.account) {
            return (
                <div>
                    <TransactionInput account={this.props.account}/><br></br>
                    <Transactions transactions={this.props.account.transactions} account={this.props.account}/>
                </div>
            )
        }
        else {
            return(
                <p>no transacations</p>
            )
        }
        
    }


}

export default TransactionContainer;