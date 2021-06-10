import React from 'react';
import {connect} from 'react-redux';
import {addAccount} from '../actions/addAccount';

class AccountInput extends  React.Component {

    state = {
        name: '', 
        balance: '', 
        goal_amount: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addAccount(this.state)
        this.setState({
            name: '', 
            balance: '', 
            goal_amount: ''
        })
        // this.props.account.push(`/accounts`)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <lable>Account Name: </lable>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br></br>
                    <lable>Account Balance: </lable>
                    <input type='text' placeholder='Balance' value={this.state.balance} name="balance" onChange={this.handleChange}/><br></br>
                    <lable>Account Goal: </lable>
                    <input type='text' placeholder='Goal' value={this.state.goal_amount} name="goal_amount" onChange={this.handleChange}/><br></br>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addAccount})(AccountInput);