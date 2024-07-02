import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home';
import Anagram from './Component/Anagram/Anagram';
import Counter from './Component/Counter/Counter';
import QrCode from './Component/QrCode/QrCode';
import Dropper from './Component/Dropper/Dropper';
import QuoteGenerator from './Component/QuoteGenerater/QuoteGenerator';
import StackGenerate from './Component/StackGenerate/StackGenerate';
import GuessTheNumber from './Component/GuessTheNumber/GuessTheNumber';
import TableColizer from './Component/TableColizer/TableColizer';
import WordCount from './Component/WordCount/WordCount';
import ImageGallery from './Component/ImageGallery/ImageGallary';
import BackgroundChanger from './Component/BackgroundChanger/BackgroundChanger';
import Pagination from './Component/Pagination/Pagination';
import Accordian from './Component/Accordian/Accordian';

const components = [
  { path: '/Anagram', element: <Anagram />, title: 'Anagram' },
  { path: '/Counter', element: <Counter />, title: 'Counter' },
  { path: '/QrCode', element: <QrCode />, title: 'QrCode' },
  { path: '/Dropper', element: <Dropper />, title: 'Dropper' },
  { path: '/QuoteGenerator', element: <QuoteGenerator />, title: 'QuoteGenerator' },
  { path: '/StackGenerate', element: <StackGenerate />, title: 'StackGenerate' },
  { path: '/GuessTheNumber', element: <GuessTheNumber />, title: 'GuessTheNumber' },
  { path: '/TableColizer', element: <TableColizer />, title: 'TableColizer' },
  { path: '/WordCount', element: <WordCount />, title: 'WordCount' },
  { path: '/ImageGallery', element: <ImageGallery />, title: 'ImageGallery' },
  { path: '/BackgroundChanger', element: <BackgroundChanger />, title: 'BackgroundChanger' },
  { path: '/Pagination', element: <Pagination />, title: 'Pagination' },
  { path: '/Accordian', element: <Accordian />, title: 'Accordian' },
  
  // Add more components here
];

function App() {
  const [selectedComponent, setSelectedComponent] = useState('');

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar selectedComponent={selectedComponent} />
        <Routes>
          <Route path="/" element={<Home components={components} setSelectedComponent={setSelectedComponent} />} />
          {components.map((component, index) => (
            <Route key={index} path={component.path} element={component.element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
