//render other components pass the data if they require data and can have other funtions inside of them they are typically class components

import React from 'react';
import {Route, Switch} from 'react-router-dom'
import AccountInput from '../components/AccountInput'
import Accounts from '../components/Accounts';
import Account from '../components/Account';

class AccountsContainer extends React.Component {

    render() {
        // debugger;
        return(
            <div>
                <Switch>
                    <Route path='/accounts/new' component={AccountInput}/>
                    <Route path='/accounts/:id'render={(routerProps) => <Account {...routerProps} accounts={this.props.accounts}/>}/>
                    <Route path='/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.props.accounts}/>}/>
                </Switch>
            </div>
        )
    }

}

export default AccountsContainer;