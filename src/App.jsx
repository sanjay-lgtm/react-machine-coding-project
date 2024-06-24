// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Counter from './Component/Counter/Counter'
// import Navbar from './pages/Navbar/Navbar'
// import Home from './pages/Home/Home'
// import Anagram from './Component/Anagram/Anagram'
// import QuoteGenerator from './Component/QuoteGenerater/QuoteGenerator'
// import ImageGallery from './Component/ImageGallery/ImageGallary'
// import Accordion from './Component/Accordian/Accordion'
// import Accordian from './Component/Accordian/Accordian'
// import BackgroundChanger from './Component/BackgroundChanger/BackgroundChanger'
// import Theme from './Component/LightDarkTheme/Theme'
import GuessTheNumber from './Component/GuessTheNumber/GuessTheNumber'
import Pagination from './Component/Pagination/Pagination'
import QrCode from './Component/QrCode/QrCode'
import StackGenerate from './Component/StackGenerate/StackGenerate'
import TableColizer from './Component/TableColizer/TableColizer'


// const AppContent = () => {
//   const { theme, toggleTheme } = useTheme();

//   useEffect(() => {
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark');

//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//   }, [theme])
//   return (
//     <div className='min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
//       <div className='text-center'>
//         <h1 className='text-4xl font-bold text-gray-900 dark:text-white'>
//           { `Current Theme : ${theme}` }
//         </h1>
//         <button
//           onClick={ toggleTheme }
//           className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md dark:bg-blue-700'
//         >Toggle Theme</button>
//       </div>
//     </div>
//   )
// }
function App() {


  return (
    <div>
      {/* <Counter/> */ }
      {/* <Navbar/>
      <Home/> */}
      {/* <Anagram/> */ }
      {/* <QuoteGenerator/> */ }
      {/* <ImageGallery/> */ }
      {/* <Accordian/> */ }
      {/* <BackgroundChanger/> */ }
      {/* <AppContent /> */}
      {/* <QrCode/> */}
      {/* <TableColizer/> */}
      {/* <GuessTheNumber/> */}
      {/* <Pagination/> */}
      <StackGenerate/>
    </div>
  )
}

export default App
