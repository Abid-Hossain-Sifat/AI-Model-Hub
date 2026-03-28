import { useState } from 'react'
import './App.css'
import NavBar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'
import Tabs from './Tabs'
import Cart from './Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar></NavBar>
     <Banner></Banner>
     <Tabs></Tabs>
     <Cart></Cart>
     <Footer></Footer>
     
    </>
  )
}

export default App
