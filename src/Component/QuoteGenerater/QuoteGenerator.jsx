import React, { useEffect, useState } from 'react'

const QuoteGenerator = () => {
    const [quote, setQuote] = useState(null)
    const [tag, setTag] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const fetchQuote = async (tag = '') => {
        setLoading(true)
        try {
            const url = tag ? `https://api.quotable.io/random?tags=${tag}` : 'https://api.quotable.io/random'

            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            const data = await res.json();
            setQuote(data)
            setError(null)
        } catch (error) {
            setError(error.toString());
            setQuote(null)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchQuote();
    }, [])

    const handleTagChange = (e) => {
        setTag(e.target.value)

    }

    const handleTagSearch = () => {
        fetchQuote(tag)
    }
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white p-6 rounded-lg shadow-md max-w-lg text-center'>
                { loading && <p className='text-red-500'>Loading...</p> }
                { error && <p>{ error }</p> }
                { quote && (
                    <>
                        <p className='text-xl font-semibold mb-4'> { quote.content }</p>
                        <p className='text-gray-500 mb-4'>- { quote.author }</p>
                    </>
                ) }
                <button
                    onClick={ () => fetchQuote() }
                    className='bg-blue-500 text-white px-4 py-2 rou hover:bg-blue-700'>
                    Generate Random Quote
                </button>
                <div className='flex gap-2 mt-4'>
                    <input type='text' value={ tag }
                        onChange={ handleTagChange }
                        placeholder='Enter tag' className='border p-2 rounded w-full' />
                    <button
                        onClick={ handleTagSearch }
                        className='px-4 py-2 rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
                         text-white font-bold  shadow-lg hover:from-pink-600 hover:via-red-600
                          hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-pink-500 
                          focus:ring-opacity-50 transition-all duration-300'>Search by tag</button>
                </div>
            </div>
        </div>
    )
}

export default QuoteGenerator
