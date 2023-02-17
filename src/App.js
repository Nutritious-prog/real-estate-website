import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <ScrollToTop /> */}
    <Routes>  
      <Route index element={<MainPage/>}></Route>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/home' element={<MainPage/>}></Route>

    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
