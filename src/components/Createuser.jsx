import React, {useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Createuser = () => {
  const [username, setUsername] = useState("")
  const [isPending, setIsPending] = useState(false)
  const history=useHistory();
  const submitData = (e) => {
    e.preventDefault();
    const user={username}
    console.log(username);
    setIsPending(true);


    axios.post('http://localhost:5000/users/add', user)
    .then(res => {
      console.log(res.data)
      console.log("new user added");
      setIsPending(false)
      history.push('/')
    
    })
    .catch((err)=>console.log(err));    
    
  }

  
  return (
    <div>
        <h3>Create New User</h3>
        <form onSubmit={submitData}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
          </div>
          <div className="form-group">
         {!isPending &&<button className="btn btn-primary">Create User</button>}
         {isPending &&<button className="btn btn-primary">Adding User....</button>}
          </div>
        </form>
      </div>
  );
}

export default Createuser