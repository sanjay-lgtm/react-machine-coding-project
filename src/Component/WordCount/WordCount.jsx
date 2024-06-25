import React, { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';
const WordCount = () => {
    const [theme, setTheme] = useState('light')
    const [inputText, setInputText] = useState('')

    const handleClear = () => {
        setInputText('')
    }

    const countWords = (text) => {
        return text.trim().split(/\s+/).filter(word => word.length > 0).length;
    }

    const countChar = (text) =>{
        return text.length;
    }
    const countParagraphs = (text) => {
        return text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0).length;
    }

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
        document.documentElement.classList.toggle('dark')
    }
    return (
        <div className={ `min-h-screen flex flex-col items-center justify-center ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'} p-4 transition-colors duration-300` }>
            <div className='absolute top-4 right-10'>
                <button className='text-4xl' onClick={ toggleTheme }>
                    { theme === 'light' ? <FaMoon className='text-gray-800' /> : <FaSun className='text-yellow-300' /> }
                </button>
            </div>
            <div className={ `p-6 rounded-lg shadow-lg w-full max-w-md ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}` }>
                <h1 className={ `text-3xl font-bold mb-4 text-center ${theme === 'light' ? 'text-black' : 'text-white'}` }>Word Count</h1>
                <textarea
                    value={ inputText }
                    onChange={ (e) => setInputText(e.target.value) }
                    placeholder='Enter your text here....'
                    rows='10'
                    className={ `border p-2 mb-4 w-full rounded-lg ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-700 text-white'}` }
                />
                <div className='flex justify-between items-center mb-4'>
                    <div className={ `text-xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}` }>
                        Word Count : {countWords(inputText) } | Characters : {countChar(inputText)} | Paragraphs : {countParagraphs(inputText)
                        }
                    </div>
                    <button
                    onClick={handleClear}
                        className={ `p-2 rounded-lg ${theme === 'light' ? 'bg-red-500 text-white' : 'bg-red-700 text-white'}` }
                    >
                        Clear
                    </button>
                </div>
            </div>

        </div>
    )
}

export default WordCount
