import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Component/Counter/Counter'
import Navbar from './pages/Navbar/Navbar'
import Home from './pages/Home/Home'
import Anagram from './Component/Anagram/Anagram'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter/> */}
      {/* <Navbar/>
      <Home/> */}
      <Anagram/>
    </>
  )
}

export default App
