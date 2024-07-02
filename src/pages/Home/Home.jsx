import React, { useState } from 'react';
import Card from '../card/Card';
import { useTheme } from '../../context/ThemeContext';  // import useTheme hook

const Home = ({ components, setSelectedComponent }) => {
  const { theme, toggleTheme } = useTheme();  // get theme and toggleTheme from context
  const [search, setSearch] = useState('');

  const filteredComponents = components.filter(component => 
    component.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`container mx-auto p-4 ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
      <div className="flex mb-4 space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className={`border p-2 rounded flex-grow ${theme === 'light' ? 'border-gray-300' : 'border-gray-600 bg-gray-700 text-white'}`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button 
          onClick={toggleTheme} 
          className={`px-4 py-2 rounded ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-yellow-500 text-black'}`}
        >
          Toggle Theme
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {filteredComponents.map((component, index) => (
          <Card
            key={index}
            title={component.title}
            navigateTo={component.path}
            setSelectedComponent={setSelectedComponent}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
