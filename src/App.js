import './App.css';
import { Route, Routes } from 'react-router-dom';

//Auth Imports
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
