import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const BackgroundChanger = () => {
    const [bgColor, setBgColor] = useState('#ffffff');
    const { theme, toggleTheme } = useTheme();

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const changeColor = () => {
        setBgColor(getRandomColor());
    };

    return (
        <div
            style={{ backgroundColor: bgColor }}
            className={`min-h-screen flex flex-col items-center justify-center ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'} transition-colors duration-300`}
        >
           
            <div className="text-center">
                <h1 className={`text-3xl font-bold mb-6 ${theme === 'light' ? 'text-black' : 'text-gray-500'}`}>Random Background Color Changer</h1>
                <button
                    onClick={changeColor}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                    Change Background Color
                </button>
            </div>
        </div>
    );
};

export default BackgroundChanger;
