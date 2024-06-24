import React, { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';
const StackGenerate = () => {
    const [stack, setStack] = useState([]);
    const [input, setInput] = useState('');
    const [theme, setTheme] = useState('light')

    const handlePush = () => {
        if (input !== '') {
            setStack([...stack, input]);
            setInput('');
        }
    }
    const handlePop = () => {
        if (stack.length > 0) {
            setStack(stack.slice(0, -1));
        }
    }

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
        document.documentElement.classList.toggle('dark')
    }
    return (
        <div className={ `min-h-screen flex flex-col items-center justify-center p-4 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'} p-4 transition-colors duration-300` }>
            <div className='absolute top-4 right-10'>
                <button
                    onClick={ toggleTheme }
                    className='text-4xl'
                >{theme === 'light' ? <FaMoon className='text-gray-800'/> : <FaSun className='text-yellow-300'/>}</button>
            </div>
            <div className={ `p-6 rounded-lg shadow-lg w-full max-w-md ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}` }>
                <h1 className={ `text-3xl font-bold mb-4 text-center ${theme === 'light' ? 'text-black' : 'text-white'}` }>Stack Generate</h1>
                <div className='flex mb-4'>
                    <input
                        type='text'
                        value={ input }
                        onChange={ (e) => setInput(e.target.value) }
                        placeholder='Enter a value'
                        className={ `border p-2 flex-grow rounded-lg ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-700 text-white'}` }
                    />
                    <button
                        onClick={ handlePush }
                        className={ `ml-2 p-2 rounded-lg ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-blue-700 text-white'}` }>Push</button>
                    <button onClick={ handlePop } className={ `ml-2 p-2 rounded-lg ${theme === 'light' ? 'bg-red-500 text-white' : 'bg-red-700 text-white'}` }>Pop</button>

                    <div className={ `p-4 rounded-lg ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'}` }>
                        <h2 className={ `text-xl font-bold mb-2 ${theme === 'light' ? 'text-black' : 'text-white'}` }>Stack:</h2>
                        <ul>
                            { stack.map((item, index) => (
                                <li
                                    key={ index }
                                    className={ `p-2 my-1 rounded-lg text-center ${theme === 'light' ? 'bg-gray-300 text-black' : 'bg-gray-600 text-white'}` }
                                >{ item }</li>
                            )) }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StackGenerate
