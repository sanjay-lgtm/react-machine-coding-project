import React, { useState } from 'react'
import Accordion from './Accordion'

const items = [
    {
        title: 'Section 1',
        content: 'Content for section 1',
    },
    {
        title: 'Section 2',
        content: 'Content for section 2',
    },
    {
        title: 'Section 3',
        content: 'Content for section 3',
    },
];
const Accordian = () => {
    const [allowMultiple, setAllowMultiple] = useState(false);
    return (
        <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Accordion Example</h1>
        <div className="flex items-center justify-center mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={allowMultiple}
              onChange={(e) => setAllowMultiple(e.target.checked)}
            />
            Allow multiple open sections
          </label>
        </div>
        <Accordion items={items} allowMultiple={allowMultiple} />
      </div>
    );
};


export default Accordian
