import React from 'react';
import Loginform from './components/Loginform/Loginform';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './components/Register/Register';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Loginform />}></Route>
      <Route path='/Register' element={<Register />}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
