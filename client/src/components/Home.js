import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [users])

  const handleDelete = id =>{
    const agree = window.confirm('Are you agree to delete');
    console.log(id);
    if(agree){
      fetch(`http://localhost:5000/users/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          alert("user deleted successful")
        }
      })
    }
  }

 

  return (
    <div>
      {
        users.length === 0 ? <h1>Loading...</h1> : 
        <>
          <h1>Users: {users.length}</h1>
          <div className="grid">
            {
              users.map(user => <div key={user._id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <button onClick={() => handleDelete(user._id)}>X</button>
                <br />
                <Link to={`/update/${user._id}`} >
                <button>Update</button>
                </Link>
              </div>)
            }
          </div>
        </>
      }
    </div>
  )
}

export default Home