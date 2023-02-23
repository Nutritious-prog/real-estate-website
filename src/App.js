import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TestPropertyShowcase from './pages/propertiesPages/TestPropertyShowcase';
import ContactPage from './pages/ContactPage';
import AboutUs from './pages/AboutUsPage';
import HousesListPage from './pages/HousesListPage';

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <ScrollToTop /> */}
    <Routes>  
      <Route index element={<MainPage/>}></Route>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/home' element={<MainPage/>}></Route>
      <Route path='/kontakt' element={<ContactPage/>}></Route>
      <Route path='/o-nas' element={<AboutUs/>}></Route>
      <Route path='/domy' element={<HousesListPage />} ></Route>
      <Route path='/domy/dom-a' element={<TestPropertyShowcase/>}></Route>

    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
