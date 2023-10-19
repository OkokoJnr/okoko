import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/pages/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<NavBar/>}>
              <Route index element={<Home/>}/>
          </Route>
      </Routes>
  
        </BrowserRouter>
    </div>
  );
}

export default App;
