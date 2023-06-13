import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Container1 from './components/Container1/Container1'
import Container2 from './components/Container2/Container2'
import Aboutus from './components/Aboutus/Aboutus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner/>
      <Container1/>
      <Container2/>
      <Aboutus/> 
      <h1>app</h1>
    
    </>
  )
}

export default App
