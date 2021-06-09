export const addTransaction = (transaction, accountId) => {

    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/api/v1/accounts/${accountId}/transactions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
                body: JSON.stringify(transaction) 
        })
        .then(res => res.json())
        .then(account => {
            if (account.error) {
                alert(account.error)
            } else {
                dispatch({type: 'ADD_TRANSACTION', payload: account})
            } 
        })
    }
}