import React, {useState} from 'react'; //useState is a react hook that is needed for functional components
                                        // to set and change state. useState comes from the react library. 
import {Link} from 'react-router-dom' //Route
// import Account from './Account'

const Accounts = ({accounts}) => {
    const [ searchTerm, setSearchTerm ] = useState("") //first variable in the array is the name of the state. the second variable is the name of the function that 
//will change the state. whatever you put in the paretheses of useState is the starting default value for your state.
    // console.log(props)
    // debugger;
   function handleChange(event) {
        setSearchTerm(event.target.value)
   }

    return(
        <div>
            <form>
                <input type='text' placeholder='Search' onChange={handleChange}/> 
                <input type='submit'/>
            </form>
            {accounts.filter(account => {
                if(searchTerm == ""){
                    return account
                } else if (account.name.toLowerCase().includes(searchTerm.toLowerCase())){// "Disney" => to lowercase "disney" if the string "disney" includes a 
                    // "D" => to lowercase "d" than return "disney"
                    // you have a group of names.. filter will make a new group of names only including what you tell it to
                    //if the user doesnt type anything than we will just return the original group of names
                    //if the user inputs something than we will change every name to lowercase and the input from user to lowercase
                    //doin this will make an even playing field. after that is done we will one by one if the name inlcudes the users input 
                    //if it does than we add it to the new group. then we will return the new group
                    return account
                }
            }).map(account => 
                <li key={account.id}>
                     <Link to={`/accounts/${account.id}`}>{account.name}</Link> 
                </li>)}
        </div>
    )
}


// {accounts.map(account =>
//     <li key={account.id}>
//          <Link to={`/accounts/${account.id}`}>{account.name}</Link> 
//     </li>)}

export default Accounts;