import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Container1 from './components/Container1/Container1'
import Container2 from './components/Container2/Container2'
import Aboutus from './components/Aboutus/Aboutus'
import Partners from './components/Partners/Partners'
import Contactus from './components/ContactUs/Contactus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner/>
      <Container1/>
      <Container2/>
      <Aboutus/> 
      <Partners/>
      <Contactus/>
    </>
  )
}

export default App
