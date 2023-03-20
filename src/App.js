import './App.css';

import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Events from './Components/Events';
import Login from './Components/Login';
import Reservation from './Components/Reservation';
import PrivateParties from './Components/PrivateParties';
import Contacts from './Components/Contacts';
import AboutUs from './Components/AboutUs';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
  
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/reservation' element={<Reservation/>}/>
        <Route path='/privateParty' element={<PrivateParties/>}/>
        <Route path='/events' element={ <Events/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
