import React, { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
const Dropper = () => {
    const [theme, setTheme] = useState('light')
    const [selectCategory, setSelectCategory] = useState('')
    const [selectSubcategory, setSelectSubCategory] = useState('')

    const categories = {
        Fruits: ['Apple', 'Banana', 'cherry'],
        Vegetables: ['carrot', 'Brocalli', 'spinch'],
        Drinks: ['Coffee', 'Tea', 'Juice']
    }


    const handleCategoryChange = (e) => {
        setSelectCategory(e.target.value);
        setSelectSubCategory('')
    }
    const handleSubCategoryChange = (e) => {
        setSelectSubCategory(e.target.value);
    }
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        document.documentElement.classList('dark')
    }
    return (
        <div className={ `min-h-screen flex flex-col items-center justify-center ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'} p-4 transition-colors duration-300` }>
            <div className='absolute top-4 right-10'>
                <button
                    onClick={ toggleTheme }
                    className='text-4xl'>{ theme === 'light' ? <FaMoon className='text-gray-800' /> : <FaSun className='text-yellow-400' /> }
                </button>
            </div>
            <div className={ `p-6 rounded-lg shadow-lg w-full max-w-md ${theme === 'light' ? 'bg-pink-300' : 'bg-gray-700'}` }>
                <h1 className={ `text-3xl font-bold mb-4 text-center ${theme === 'light' ? 'text-black' : 'text-white'}` }>DropDown  Example</h1>
                <div className='mb-4'>
                    <label className={ `text-xl ${theme === 'light' ? 'text-black' : 'text-white'}` }>Select Category</label>
                    <select
                        value={ selectCategory } onChange={ handleCategoryChange }
                        className={ `block w-full mt-1 px-3 py-2 border ${theme === 'light' ? 'border-gray-300 bg-white' : 'border-gray-700 bg-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm` }>
                        <option value="">--Select Category--</option>
                        { Object.keys(categories).map(category => (
                            <option key={ category } value={ category }>{ category }</option>
                        )) }

                    </select>
                </div>

                { selectCategory && (
                    <div className='mb-4'>
                        <label className={ `text-xl ${theme === 'light' ? 'text-black' : 'text-white'}` }>Select SubCategory</label>
                        <select
                            value={ selectSubcategory }
                            onChange={ handleSubCategoryChange }
                            className={ `block w-full mt-1 px-3 py-2 border ${theme === 'light' ? 'border-gray-300 bg-white' : 'border-gray-700 bg-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm` }>
                            <option>--Select Subcategory--</option>
                            { categories[selectCategory].map(subcategory => (
                                <option key={ subcategory } value={ subcategory }>{ subcategory }</option>
                            )) }
                        </select>
                    </div>
                ) }
            </div>
            <div className={ `p-6 rounded-md shadow-lg mt-4 ${theme === 'light' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}` }>
                <h2 className='text-lg font-semibold'>Selected Values:</h2>
                <p className='text-xl'>Category : {selectCategory} </p>
                <p className='text-xl'>SubCategory :  {selectSubcategory}</p>
            </div>
        </div>
    )
}

export default Dropper
