import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<h1>PAGE NOT FOUND ERROR 404</h1>}/> {/*KADA NAPRAVIMO GRESKU U URL-U RENDEROVACE SE OVA STRANICA! */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
