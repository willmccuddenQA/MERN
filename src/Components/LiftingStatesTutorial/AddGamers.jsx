'use strict'

const AddGamers = ({newPlayer,submitHandler,handleAdd}) =>{
    return(
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter Name:" onChange ={newPlayer}></input>
            <button type="button" onClick={handleAdd}>Add Player</button>
        </form>
    );
}

export default AddGamers;