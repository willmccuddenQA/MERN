'use strict'

import {useState} from 'react'

const UserAndPassword = () =>{
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const printValues = () => {
        console.log(username,password);
    }

    return(
        <>
            <form onSubmit = {printValues}>
                <label>Username:</label>
                <input type="text" value={username} onChange={e=>setUsername(e.target.value)}/>

                <label>Password:</label>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <br/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default UserAndPassword;