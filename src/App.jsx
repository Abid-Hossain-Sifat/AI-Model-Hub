import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'
import Tabs from './Tabs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar></NavBar>
     <Banner></Banner>
     <Tabs></Tabs>
     <Footer></Footer>
     
    </>
  )
}

export default App
