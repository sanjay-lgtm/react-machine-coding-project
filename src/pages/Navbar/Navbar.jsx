import React from 'react';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ selectedComponent }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-gray-500 to-pink-600">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <button
              onClick={handleBackClick}
              className="text-white font-bold mr-4 flex items-center"
            >
              <FaArrowLeft className="mr-2" />
              
            </button>
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src="/react.png" alt="Your Company" />
            </div>
            <div className="ml-4 text-white font-bold">{selectedComponent}</div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a href='https://github.com/sanjay-lgtm/react-machine-coding-project' target='_blank' rel='noopener noreferrer'>
              <FaGithub style={{ width: "30px", height: "32px" }} />
            </a>
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <img className="h-8 w-8 rounded-full" src="/profile.jpg" alt="Profile" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
