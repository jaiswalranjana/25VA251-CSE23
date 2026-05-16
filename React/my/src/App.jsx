
import './App.css'
import Demo from './component/Demo';
import Props from './component/Props';
import UseEffect from './component/UseEffect'

function App() {
  const name="React JS"

  return (
    <>

<h2>hello {name}</h2>
<Demo></Demo>
<UseEffect></UseEffect>

{/* <const [first, setfirst] = useState(second) */}
{/* <Props name=" Ranjana" rollno="25B0182" course="B.Tech" sgpa="0.00"/> */}

{/* for multipls data using props */}
{/* //hooks  in react allows to use stale and other react features  */}
{/*  */}

    </>
  )
}

export default App
