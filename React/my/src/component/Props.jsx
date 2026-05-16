import React from 'react'

function Props(props) {
  return (
    <>
 <div>Props</div>

 <h1>Props</h1>
 {/* <h2>Hello{props.name}</h2> */}
 <h2>{props.name}</h2>
 <h3>{props.rollno}</h3>
 <h4>{props.course}</h4>
 <h4>{props.sgpa}</h4>

    </>
   
  )
}

export default Props