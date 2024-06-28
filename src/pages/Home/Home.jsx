import React, { useState } from 'react';
import Card from '../card/Card';

const Home = ({ components, setSelectedComponent }) => {
  const [search, setSearch] = useState('');
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');

  const filteredComponents = components.filter(component => 
    component.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex mb-4 space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded flex-grow"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <select
          className="border p-2 rounded"
          value={dropdown1}
          onChange={(e) => setDropdown1(e.target.value)}
        >
          <option value="">Dropdown 1</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <select
          className="border p-2 rounded"
          value={dropdown2}
          onChange={(e) => setDropdown2(e.target.value)}
        >
          <option value="">Dropdown 2</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select> */}
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
