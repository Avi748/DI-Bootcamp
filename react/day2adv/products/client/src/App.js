import {Routes, Route} from 'react-router-dom'
import './App.css';
import Products from './components/Products';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products/>}></Route>
        <Route path="/:id" element={<Product/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
