import './App.css';
import LoginPage from './LoginPage/LoginPage';
import MainPage from './MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path='/' element={<LoginPage/>}>
          </Route>
          <Route path='/Main' element={<MainPage/>}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
