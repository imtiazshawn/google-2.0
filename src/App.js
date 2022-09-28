import './App.css';
import Home from './Pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SearchPage from './Pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<SearchPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
