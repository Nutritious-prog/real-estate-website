import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TestPropertyShowcase from './pages/propertiesPages/TestPropertyShowcase';
import ContactPage from './pages/ContactPage';
import AboutUs from './pages/AboutUsPage';
import HousesListPage from './pages/HousesListPage';
import B from './pages/propertiesPages/B';
import C from './pages/propertiesPages/C';
import D from './pages/propertiesPages/D';
import E from './pages/propertiesPages/E';
import R from './pages/propertiesPages/R';
import T from './pages/propertiesPages/T';

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
      <Route path='/domy/dom-b' element={<B/>}></Route>
      <Route path='/domy/dom-c' element={<C/>}></Route>
      <Route path='/domy/dom-d' element={<D/>}></Route>
      <Route path='/domy/dom-e' element={<E/>}></Route>
      <Route path='/domy/dom-r' element={<R/>}></Route>
      <Route path='/domy/dom-t' element={<T/>}></Route>


    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
