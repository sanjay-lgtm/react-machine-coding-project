import QRCode from 'qrcode.react'
import React, { useState } from 'react'

const QrCode = () => {
    const [inputValue,setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4'>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h1 className='text-3xl font-bold mb-4 text-center'>QR Code Generator</h1>
            <input type='text'
            value={inputValue}
            onChange={handleInputChange}
            className='border p-2 mb-4 w-full rounded-lg' 
            placeholder='Enter Text or URL'

            />
            <div className='flex justify-center '>
                <QRCode value={inputValue}/>
            </div>
        </div>
      
    </div>
  )
}

export default QrCode
