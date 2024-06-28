import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, navigateTo, setSelectedComponent }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setSelectedComponent(title);
    navigate(navigateTo);
  };

  return (
    <div
      className="bg-white p-4 rounded shadow-md cursor-pointer hover:shadow-lg transition duration-300 ease-in-out"
      onClick={handleClick}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      {/* Add more content or styling as needed */}
    </div>
  );
};

export default Card;
