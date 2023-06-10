import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Container1 from './components/Container1/Container1'
import Container2 from './components/Container2/Container2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner/>
      <Container1/>
      <Container2/> 
      <h1>app</h1>
    
    </>
  )
}

export default App
