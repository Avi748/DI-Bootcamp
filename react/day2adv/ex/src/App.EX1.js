import React from 'react'
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render(){
    return(
    <BrowserRouter>
          <>
          <header>
            <nav>
              <Link to="/">Home</Link>{" "}
              <Link to="/profile">Profile</Link>{" "}
              <Link to="/shop">Shop</Link>{" "}
            </nav>
          </header>
        </>
      <ErrorBoundary>
        <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/profile' element={<ProfileScreen/>}/>
        <Route path='/shop' element={<ShopScreen/>}/>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
    );
  } 
}

const HomeScreen = () => {
  return(
    <div>
        <h1>Home</h1>
    </div>
  );
}

const ProfileScreen = () => {
  return(
    <div>
        <h1>Profile Screen</h1>
    </div>
  );
}

const ShopScreen = () => {
  throw Error("error")
  return(
    <div>
        <h1>Shop Screen</h1>
    </div>
  );
}

export default App;
