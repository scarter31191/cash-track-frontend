

export function fetchAccounts() {

    fetch('http://127.0.0.1:3000/api/v1/accounts')
    .then(res => res.json())
    .then(data => console.log(data))

} 
