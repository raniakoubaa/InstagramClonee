import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Login from './component/Login/Login';

import Compte from './component/Compte/Compte';
import CardProfil from './component/CardProfil/CardProfil';

function App() {

  return (
    <div className="App">
 
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<div><Home/><Footer/> </div>}/>
          <Route path="/CardProfil" element={<CardProfil/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/profil/:id" element={<Compte/>}/>
        </Routes>
        {/* <Footer/> */}
      </Router>      
    </div>
  );
}

export default App;
