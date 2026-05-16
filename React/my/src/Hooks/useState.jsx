import React, { useState } from 'react'

function useeffect() {

  const[color,setColor]=useState('red');
  return (
    // <div>useeffect</div>
    <>
    <h1>Use state Hook</h1>
    <p style={{color:color}}>  Hooks allow functions to have access to state and other React features without using classes.
     They provide a more direct API to React concepts like props, state, context, refs, and lifecycle.
</p>
    </>
  )
}

export default useeffect