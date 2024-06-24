// import React, { useState } from 'react'

// const TableColizer = () => {
//     const rows = 5;
//     const cols = 5;

//     const initialColors = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 'bg-white'))

//     const [colors, setColors] = useState(initialColors)

//     const handleColorChange = (rowIndex,colIndex) => {
//         const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
//         const newColors = colors.map((row,rIdx) => row.map((col,cIdx) => rIdx === rowIndex && cIdx === colIndex ? randomColor : col))
//         setColors(newColors)
//     }
//     return (
//         <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
//             <h1 className='text-2xl font-bold mb-4'>Table Colizer</h1>
//             <table className='border-collapse border border-gray-400'>
//                 <tbody>
//                     { colors.map((row, rowIndex) => (
//                         <tr key={ rowIndex }>
//                             { row.map((color, colIndex) => (
//                                 <td key={ colIndex }
//                                     className={ `w-16 h-16 ${color} cursor-pointer` }
//                                     onClick={ () => handleColorChange(rowIndex, colIndex) }
//                                 >
//                                     &nbsp;
//                                 </td>

//                             )) }
//                         </tr>
//                     )) }

//                 </tbody>

//             </table>

//         </div>
//     )
// }

// export default TableColizer

import { color } from 'framer-motion';
import React, { useState } from 'react'

const TableColizer = () => {
    const rows = 5;
    const columns = 5;

    const initialColors = Array.from({ length: rows }, () => Array.from({ length: columns }, () => 'bg-white'))

    const [colors, setColors] = useState(initialColors)
    const [rowIndex, setRowIndex] = useState('')
    const [colIndex, setColIndex] = useState('')

    const handleColorChange = () => {
        if (rowIndex < 0 || rowIndex >= rows || colIndex < 0 || colIndex >= columns) {
            alert('Invalid row or column index')
            return;
        }


        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        const newColors = colors.map((row, rIdx) => row.map((col, cIdx) => rIdx === parseInt(rowIndex) && cIdx === parseInt(colIndex) ? randomColor : col))
        setColors(newColors)
    }
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
            <h1 className='text-2xl font-bold mb-4'>Table Colizer</h1>
            <div className='mb-4'>
                <input
                    type='number'
                    placeholder='Row Index'
                    value={ rowIndex }
                    className='border p-2 m-2'
                    onChange={ (e) => setRowIndex(e.target.value) }
                />
                <input
                    type='number'
                    placeholder='Column Index'
                    className='border p-2 m-2'
                    value={ colIndex }
                    onChange={ (e) => setColIndex(e.target.value) }
                />
                <button onClick={ handleColorChange } className='bg-blue-500 text-white p-2 m-2 rounded'>Change Color</button>
            </div>
            <table className='border-collapse border border-gray-400'>
                <tbody>
                    { colors.map((row, rIdx) => (
                        <tr key={ rIdx }>
                            { row.map((color, cIdx) => (
                                <td key={ cIdx }
                                    className={ `w-16 h-16 ${color}` }
                                >
                                    &nbsp;
                                </td>
                            )) }
                        </tr>
                    )) }
                </tbody>
            </table>

        </div>
    )
}

export default TableColizer

