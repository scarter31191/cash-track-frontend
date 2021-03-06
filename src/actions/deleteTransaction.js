export const deleteTransaction = (transactionId, accountId) => {
// debugger;
    return (dispatch) => {
        dispatch({ type: 'DELETING_TRANSACTION'})
        fetch(`http://127.0.0.1:3000//api/v1/accounts/${accountId}/transactions/${transactionId}`, {
            method: 'DELETE' 
        })
        .then(res => res.json())
        .then(account => dispatch({type: 'DELETE_TRANSACTION', payload: account}))
    }
}