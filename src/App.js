import Dashboard from './components/Dashboard';
import Sidenav from './components/Sidenav';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Portfolio from './components/Portfolio';
import Profile from './components/Profile';
import Trading from './components/Trading';
import Wallet from './components/Wallet';
import Academy from './components/Academy';
import Watchlist from './components/Watchlist';

function App() {
  return (
    <div className="App">
      <div className='body'>
         <div className='side'>
           <Sidenav/>
         </div>
         <div className='main'>
           <Routes>
               <Route path='/' element={ <Dashboard/> }/>
               <Route path='portfolio' element={ <Portfolio/> }/>
               <Route path='trading' element={ <Trading/> }/>
               <Route path='watchlist' element={ <Watchlist/> }/>
               <Route path='academy' element={ <Academy/> }/>
               <Route path='profile' element={ <Profile/> }/>
               <Route path='wallet' element={ <Wallet/> }/>
           </Routes>
         </div>
      </div>
    </div>
  );
}

export default App;
