import React from 'react'

function UseEffect() {
    const [timer,setTimer]=UseStat(0)

    const cb=()=>{
        setTimeout(cb,1000);
    }
    

  return (
    <>
    <div>UseEffect</div>
    <h1>Counter</h1>
    </>
    
  )
}

export default UseEffect