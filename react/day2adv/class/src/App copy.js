import './App.css';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import ErrorPage from './components/ErrorPage';
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/about">About</Link>{" "}
          <Link to="/shop">Shop</Link>{" "}
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/:id' element={<Shop/>}/>
        <Route path='/shop/:id/:productId' element={<Shop/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
