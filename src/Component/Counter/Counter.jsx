import React, { useRef, useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  const step = useRef(1);

  const setStep = (value) => {
    step.current = value;
  };

  const increment = () => {
    setValue((state) => state + step.current);
  };

  const decrement = () => {
    setValue((state) => state - step.current);
  };

  const reset = () => {
    setValue(0);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h2 className="font-bold text-3xl mb-5">{value}</h2>
      <section className="flex space-x-4 mb-5">
        <button
          onClick={decrement}
          className="px-4 py-2 text-2xl bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
        >
          -
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 text-2xl bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
        >
          +
        </button>
      </section>

      <section className="flex items-center space-x-3 mb-5">
        <label htmlFor="step" className="text-lg">
          Increment/Decrement by
        </label>
        <input
          type="number"
          id="step"
          defaultValue={step.current}
          onChange={(e) => setStep(e.target.valueAsNumber)}
          className="border border-gray-300 rounded px-2 py-1"
        />
      </section>

      <section>
        <button
          onClick={reset}
          className="px-4 py-2 text-2xl bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Reset
        </button>
      </section>
    </main>
  );
};

export default Counter;
