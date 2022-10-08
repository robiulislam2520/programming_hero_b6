import React from 'react'

const NotFound = () => {
  return (
    <div style={{textAlign: 'center', padding: '100px 0'}}>
        <h1>Opps 404! Your searching page not Found</h1>
        <button style={{padding: '10px 20px'}} onClick={() => window.history.back()}>Go back</button>
    </div>
  )
}

export default NotFound