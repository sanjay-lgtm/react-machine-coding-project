import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';  // import useTheme hook

const Card = ({ title, navigateTo, setSelectedComponent }) => {
  const { theme } = useTheme();  // get theme from context
  const navigate = useNavigate();

  const handleClick = () => {
    setSelectedComponent(title);
    navigate(navigateTo);
  };

  return (
    <div
      className={`p-4 rounded shadow-md cursor-pointer hover:shadow-lg transition duration-300 ease-in-out ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
      onClick={handleClick}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      {/* Add more content or styling as needed */}
    </div>
  );
};

export default Card;
