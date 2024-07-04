
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Read from './pages/Read'
import Create from './pages/Create'
import Update from './pages/Update'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<  Create />} />
        <Route path="/update/:id" element={< Update/>} />
        <Route path="/read/:id" element={< Read/>} />
      </Routes>
      </BrowserRouter>
    
  )
}

export default App