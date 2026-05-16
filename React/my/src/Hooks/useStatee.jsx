import React from 'react'

function useStatee() {
 

    const[color,setColor]=useStatee('red');
    const mouseover=()=>{
        setColor(color=='red'? "blue":"red");
    }


    //increment , decrement or reset - exp-08
    const[count,setCount]=useStatee(0);
    const increment=()=>{
        setCount(count+1);

    }
    const decrement=()=>{
        setCount(count-1);
    }

    const reset=()=>{
        setCount(0);
    }

    
     return (
    // <div>useStatee</div>
    <>
    <h1>Use state Hook</h1>
    <p style={{color:color}}>  Hooks allow functions to have access to state and other React features without using classes.
     They provide a more direct API to React concepts like props, state, context, refs, and lifecycle.
</p>


<div>
    <h2>{count}</h2>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>reset</button>
</div>
    </>
  )
}

export default useStatee