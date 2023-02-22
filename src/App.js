import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TestPropertyShowcase from './pages/propertiesPages/TestPropertyShowcase';

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <ScrollToTop /> */}
    <Routes>  
      <Route index element={<MainPage/>}></Route>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/home' element={<MainPage/>}></Route>
      <Route path='/houses/house-a' element={<TestPropertyShowcase/>}></Route>

    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
