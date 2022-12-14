// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/home';
import {Main} from './components/Main/MainPage'
import Settings from './components/Settings/settings';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/app' element={<Main />} />
          <Route exact path='/settings' element={<Settings />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
