import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const storedUser = useLoaderData();

    const [users, setUsers] = useState(storedUser);

   
  
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
    
        const newUser = {
          name,
          email
        }
        
      // post users
      fetch('http://localhost:5000/users', {
          method: "POST",
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
      })
      .then(res => res.json())
      .then(data => {
          if(data.acknowledged){
            alert("user added success");
          }
      })
    
        form.reset();
    
      }

  return (
    <div>
        <h1>Update User - {storedUser.name}</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" required placeholder='name'/> 
        <br /><br />
        <input type="email" name="email" id="" required placeholder='email'/>
         <br />
         <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default UpdateUser