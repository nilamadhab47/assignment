import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Forgetpassword from './components/Forgetpassword';

import RequestSend from "./components/RequestSend"
import ChangeSuccessful from "./components/ChangeSuccessful"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/forgetpassword' element={<Forgetpassword/>}/>
          <Route path='/otprequest' element={<RequestSend/>}/>
          <Route path='/success' element={<ChangeSuccessful/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
