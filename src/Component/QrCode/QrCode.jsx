import QRCode from 'qrcode.react'
import React, { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';

const QrCode = () => {
    const [inputValue, setInputValue] = useState('');
    const [theme, setTheme] = useState('light')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        document.documentElement.classList.toggle('dark')
    }
    return (
        <div className={ `min-h-screen flex flex-col items-center justify-center ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}  p-4 transition-colors duration-300` }>
            <div className={ `p-6 rounded-lg shadow-lg ${theme == 'light' ? 'bg-white' : 'bg-gray-800'}` }>
                <h1 className={ `text-3xl font-bold mb-4 text-center ${theme === 'light' ? 'text-black' : 'text-white'}` }>QR Code Generator</h1>
                <input type='text'
                    value={ inputValue }
                    onChange={ handleInputChange }
                    className={ `border p-2 mb-4 w-full rounded-lg ${theme === 'light' ? 'border-gray-300' : 'border-gray-600 bg-gray-700 text-white'}` }
                    placeholder='Enter Text or URL'
                />
                <div className='flex justify-center '>
                    <QRCode value={ inputValue } />
                </div>
            </div>
            <button
                className={ `mt-4 px-4 py-2 rounded ${theme === 'light' ? 'bg-blue-500' : 'bg-yellow-500'} text-white` }
                onClick={ toggleTheme }
                > {theme === 'light' ? <FaMoon className='text-gray-800'/> : <FaSun className='text-yellow-300'/>}</button>
    </div>
    )
}

export default QrCode
