import React, { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';
const Dropdown = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const [theme, setTheme] = useState('light')

    const categories = {
        Fruits: ['Apple', 'Banana', 'Cherry'],
        Vegetables: ['Carrot', 'Broccoli', 'Spinch'],
        Drinks: ['Coffee', 'Tea', 'Juice']
    }

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setSelectedSubCategory('')
    }
    const handleSubCategoryChange = (e) => {
        setSelectedSubCategory(e.target.value);

    }
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
        document.documentElement.classList('dark')
    }
    return (
        <div className={ `min-h-screen flex flex-col items-center justify-center ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'} p-4 transition-colors duration-300` }>
            <div className='absolute top-4 right-10'>
                <button onClick={ toggleTheme } className='text-4xl'>
                    { theme === 'light' ? <FaMoon className="text-gray-800" /> : <FaSun className="text-yellow-300" /> }
                </button>
            </div>
            <div className={ `p-6 rounded-lg shadow-lg w-full max-w-md ${theme === 'light' ? 'bg-pink-300' : 'bg-gray-700'}` }>
                <h1 className={ `text-3xl font-bold mb-4 text-center ${theme === 'light' ? 'text-black' : 'text-white'}` }>Dropdown Example</h1>
                <div className='mb-4'>
                    <label className={ `text-xl ${theme === 'light' ? 'text-black' : 'text-white'}` }>Select Category</label>
                    <select
                        value={ selectedCategory } onChange={ handleCategoryChange }
                        className={ `block w-full mt-1 px-3 py-2 border ${theme === 'light' ? 'border-gray-300 bg-white' : 'border-gray-700 bg-gray-900'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm` }
                    >
                        <option value="">--Select Category--</option>
                        { Object.keys(categories).map(category => (
                            <option key={ category } value={ category }>{ category }</option>
                        )) }

                    </select>
                </div>

                { selectedCategory && (
                    <div>
                        <labe className={ `text-xl ${theme === 'light' ? 'text-black' : 'text-white'}` } l>Select SubCategory</labe>
                        <select
                            value={ selectedSubCategory }
                            onChange={ handleSubCategoryChange }
                            className={ `block w-full mt-1 px-3 py-2 border ${theme === 'light' ? 'border-gray-300 bg-white' : 'border-gray-700 bg-gray-900'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm` }
                        >
                            <option>--Select SubCategory--</option>
                            { categories[selectedCategory].map(subCategory => (
                                <option key={ subCategory } value={ subCategory }>{ subCategory }</option>
                            )) }
                        </select>
                    </div>
                ) }
            </div>
            <div className={ `p-6 rounded-md shadow-lg mt-4 ${theme === 'light' ? 'bg-yellow-200 text-black' : 'bg-gray-700 text-white'}` }>
                <h2 className='text-lg font-semibold'>Select Values:</h2>
                <p className='text-xl'>Category : { selectedCategory } </p>
                <p className='text-xl'>SubCategory : { selectedSubCategory } </p>
            </div>

        </div>
    )
}

export default Dropdown
