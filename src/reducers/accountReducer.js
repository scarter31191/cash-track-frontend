
export default function accountReducer(state = {accounts: [], loading:false}, action) {
    // debugger
    switch (action.type) {
        case 'FETCHING_ACCOUNTS':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_ACCOUNTS':
            return { ...state,
                    accounts: action.payload,
                    loading: false
            }
        case 'ADDING_ACCOUNTS':
            return {
                ...state,
                loading: true
            }
        case 'ADD_ACCOUNT':
            return {...state, accounts: [...state.accounts, action.payload]}
        case 'ADDING_TRANSACTION':
            return {
                ...state,
                loading: true
            }
        case 'ADD_TRANSACTION':
            let accounts = state.accounts.map(account => {
                if (account.id === action.payload.id) {
                    return action.payload
                } else {
                    return account
                }
            })
            return {...state, accounts: accounts}
        case 'DELETING_TRANSACTION':
            return {
                ...state,
                loading: true
            }
        case 'DELETE_TRANSACTION':
            // debugger;
            let accountsTwo = state.accounts.map(account => {
                if (account.id === action.payload.id) {
                    return action.payload
                }else{
                    return account
                }
            })
            return {...state, accounts: accountsTwo}

        default:
            return state
    }
    

}