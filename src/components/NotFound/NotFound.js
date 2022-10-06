import React from 'react'

const styleDiv = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}

const NotFound = () => {
  return (
    <div style={styleDiv}>
        <h1>Opps!</h1>
        <h2>Your search page isn't exits</h2>
    </div>
  )
}

export default NotFound