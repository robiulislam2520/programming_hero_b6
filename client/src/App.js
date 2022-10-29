import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  // get all users
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data)
    })
  }, [users])

  // handle submit function
  const handleSubmit = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;

    const newUser = {
      name,
      email
    }

    // post users data
    fetch('http://localhost:5000/user', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newUser)
    })

   

    form.reset();

  }

  console.log(users)

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" required/> 
        <br /><br />
        <input type="email" name="email" id="" required/> <br />
        <input type="submit" value="Submit" />
      </form>
      {
        users.map(user => <h2 key={user?.id}>{user.id}. {user?.name} - {user?.email}</h2>)
      }
    </div>
  );
}

export default App;
