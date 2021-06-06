//render other components pass the data if they require data and can ahve other funtions inside of them they are typically class components

import React from 'react';
import {connect} from 'react-redux';

import {fetchAccounts} from '../actions/fetchAccounts'
import AccountInput from '../components/AccountInput'
import Accounts from '../components/Accounts'

class AccountsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchAccounts()
    }

    render() {
        return(
            <div>
                <AccountInput/><br></br>
                <Accounts accounts={this.props.accounts}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return{
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer);