export const addAccount = (data) => {
    
return (dispatch) => {
        fetch('http://127.0.0.1:3000/api/v1/accounts', {
            headers: {          //headers are a key that points to another object
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)       
        })
        .then(res => res.json())
        .then(account => dispatch({type: 'ADD_ACCOUNT', payload: account}))
    }

}