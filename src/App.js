import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Container/Home';
import Cart from './Container/Cart'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />}/>
      </Routes>
     
    </div>
  );
}

export default App;
