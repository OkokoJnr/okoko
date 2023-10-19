import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<NavBar/>}>
              
          </Route>
      </Routes>
  
        </BrowserRouter>
    </div>
  );
}

export default App;
