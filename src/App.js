import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Post from './pages/Post';
import Project from './pages/Project';

function App() {
  return (
    <BrowserRouter>
      <div className=''>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/project/:id/post/:id' element={<Post />} />
          <Route path='/project/:id' element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
