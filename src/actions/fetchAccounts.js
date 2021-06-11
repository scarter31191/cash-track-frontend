

export function fetchAccounts() {
    return (dispatch) => {
        dispatch({type: 'FETCHING_ACCOUNTS'})
        fetch('http://127.0.0.1:3000/api/v1/accounts')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_ACCOUNTS',
            payload: data
        }))
    }
} 

