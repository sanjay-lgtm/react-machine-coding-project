import React, { useState } from 'react'

const Accordion = ({ items, allowMultiple }) => {
    const [openIndexes, setOpenIndexes] = useState([]);

  const handleClick = (index) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) =>
        prev.includes(index) ? [] : [index]
      );
    }
  };
    return (
        <div className="accordion">
        {items.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => handleClick(index)}
              className="w-full text-left bg-gray-200 p-4 rounded-md shadow-md focus:outline-none"
            >
              {item.title}
            </button>
            <div
              className={`mt-2 transition-all duration-500 overflow-hidden ${
                openIndexes.includes(index) ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="p-4 bg-gray-100 rounded-md shadow-inner">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
}

export default Accordion
