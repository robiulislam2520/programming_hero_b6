# Today Server side i will learn JWT token.

``` js

// first install jsonwebtoken
npm i jsonwebtoken

// Require jwt
const jwt = require('jsonwebtoken');

// get token client side
app.post('/jwt', (req, res)=>{
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN, {expiresIn: "1h"});
  res.send({token})
})


// Verify function with middleware
function verifyJWT(req, res, next){
    const header = req.headers.authorization;

    if(!header){
      return res.status(401).send({message: "Unauthorized User Access"})
    }

    const token = header.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, decoded){
        if(err){
          return res.status(401).send({message: "Unauthorized User Access"})
        }
        req.decoded = decoded;
        next()
    })
}


```

## Then you work client side private ro require route
```js
// when you fetch data you will provide header 
fetch(url, {
    headers: {
        authorization: `Bearer ${localStorage.getItem('please add cookie')}`
    }
})
.then(res => {
    if (res.status === 401 || res.status === 403) {
        return logOut(); // call logout function
    }
    return res.json();
})
.then(data => setOrders(data))
    
```

### You need also check require route decoded section

```js
app.get('/orders', verifyJWT, async (req, res) => {
    const decoded = req.decoded;
    
    if(decoded.email !== req.query.email){
        res.status(403).send({message: 'unauthorized access'})
    }

    let query = {};
    if (req.query.email) {
        query = {
            email: req.query.email
        }
    }
    const cursor = orderCollection.find(query);
    const orders = await cursor.toArray();
    res.send(orders);
});

```