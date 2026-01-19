import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Button from './Components/Button'
import About from './Components/About'
import Experience from './Components/Experience'
import Services from './Components/Services'
import MyProjects from './Components/MyProjects'
import ClaintReview from './Components/ClaintReview'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Experience />
      <MyProjects />
      <Services />
      <ClaintReview/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
