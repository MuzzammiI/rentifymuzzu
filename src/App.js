import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../src/components/HomePage'
import Login from '../src/components/Login'
import Register from '../src/components/Register'
import { Navbar } from 'react-bootstrap';
import AddPost from './components/AddPost';
import ShowProperty from './components/ShowProperty';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/addproperty' element={<AddPost/>}/>
        <Route path='/showproperty' element={<ShowProperty/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
