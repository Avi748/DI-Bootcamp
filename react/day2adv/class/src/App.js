import './App.css';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import ErrorPage from './components/ErrorPage';
// import {Routes, Route, Link} from 'react-router-dom'
import {Link, createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'

/** Routering */
const Root = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/about">About</Link>{" "}
          <Link to="/shop">Shop</Link>{" "}
        </nav>
      </header>
      <Outlet/>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    elementL: <Root/>,
    errorElement: <ErrorPage/>,
    children : [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/shop',
        element: <Shop/>,
      },
      {
        path: '/shop/:id',
        element: <Shop/>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
