import React, { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';
const GuessTheNumber = () => {
    const [targetNumber,setTargetNumber] = useState(Math.floor(Math.random()*100) + 1)
    const [guess,setGuess] = useState('')
    const [message,setMessage] = useState('')
    const [attempts,setAttempts] = useState(0)
    const [theme,setTheme] = useState('light')
    const handleGuess = () => {
        const numberGuess = parseInt(guess,10)
        setAttempts(attempts + 1)

        if(numberGuess < targetNumber){
            setMessage('Too low!');
        }else if(numberGuess > targetNumber){
            setMessage('Too high!');
        }else{
            setMessage(`Congratulations! You guessed the number in ${attempts +1} attempts.`)
        }
        setGuess('');
    }
    const handleRestart = () => {
        setTargetNumber(Math.floor(Math.random() * 100) + 1);
        setGuess('')
        setMessage('')
        setAttempts(0)
    }
    const toggleTheme = () =>{
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        document.documentElement.classList.toggle('dark')
    }
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${theme ==='light' ? 'bg-gray-100' : 'bg-gray-900'}  p-4 transition-colors duration-300`}>
        <div className='absolute top-4 right-10'>
            <button className='text-4xl' onClick={toggleTheme}> 
                {theme === 'light' ? <FaMoon className='text-gray-800'/> : <FaSun className='text-yellow-300'/>}
            </button>
        </div>
        <h1 className={`text-3xl font-bold mb-4 ${theme === 'light' ?'text-gray-900' : 'text-gray-100'}`}>Guess The Number</h1>
        <div className='mb-4'>
            <input type="number"
            placeholder='Enter Your Guess'
            value={guess}
            onChange={(e)=> setGuess(e.target.value)}
            className={`border p-2 rounded m-2 ${theme === 'light' ? 'bg-white border-gray-400': 'bg-gray-700 border-gray-600  text-white'}`}
            />
            <button
            onClick={handleGuess}
            className={` p-2 m-2 rounded ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-blue-700 text-white'}`}
            >Guess</button>
            <button
            onClick={handleRestart}
            className={` p-2 m-2 rounded ${theme === 'light' ? 'bg-red-500 text-white' : 'bg-red-700 text-white'}`}
            >Restart</button>
        </div>
      {message && <p className={`text-lg font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>{message}</p>}
    </div>
  )
}

export default GuessTheNumber
