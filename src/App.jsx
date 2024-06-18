import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Component/Counter/Counter'
import Navbar from './pages/Navbar/Navbar'
import Home from './pages/Home/Home'
import Anagram from './Component/Anagram/Anagram'
import QuoteGenerator from './Component/QuoteGenerater/QuoteGenerator'
import ImageGallery from './Component/ImageGallery/ImageGallary'
import Accordion from './Component/Accordian/Accordion'
import Accordian from './Component/Accordian/Accordian'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter/> */}
      {/* <Navbar/>
      <Home/> */}
      {/* <Anagram/> */}
      {/* <QuoteGenerator/> */}
      {/* <ImageGallery/> */}
      <Accordian/>
    </>
  )
}

export default App
