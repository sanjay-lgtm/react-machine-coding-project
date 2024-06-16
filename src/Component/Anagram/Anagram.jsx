import React, { useState } from 'react'

const Anagram = () => {
    const [str1, setStr1] = useState('');
    const [str2, setStr2] = useState('');
    const [result, setResult] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'str1') {
            setStr1(value);
        } else {
            setStr2(value);
        }
    }

    const checkAnagram = (s1, s2) => {
        const normalize = (str) => {
            str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
            return normalize(s1) === normalize(s2);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setResult(checkAnagram(str1, str2));
    }
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <h1 className='text-2xl font-bold mb-6'>Anagram Checker</h1>
            <form onSubmit={ handleSubmit } className='bg-white p-6 rounded-lg shadow-md'>
                <div className='mb-4'>
                    <input
                        type='text'
                        name='str1'
                        value={ str1 }
                        onChange={ handleInputChange }
                        placeholder='Enter First String' className='border p-2 rounded w-full' required />
                </div>
                <div className='mb-4'>
                    <input
                        type='text'
                        name='str2'
                        value={ str2 }
                        onChange={ handleInputChange }
                        placeholder='Enter Second String' className='border p-2 rounded w-full' required />
                </div>
                <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'>Check</button>
            </form>
            { result !== null && (
                <p className='mt-4 text-lg'>{ result ? 'The strings are anagrams' : 'The strings are not anagrams' }</p>
            ) }
        </div>
    )
}

export default Anagram
