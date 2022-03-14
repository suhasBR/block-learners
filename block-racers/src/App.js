import React, {useEffect} from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Landing from "./pages/Landing";
import Metamask from './pages/Metamask';
import Signup from './pages/Signup';
import MinerProfile from './pages/MinerProfile';
import Chapters from './pages/Chapters'
import Basics from './pages/chapters/Basics'
import Login from './pages/Login';
import Learning from './pages/Learning';
import Modules from './pages/Modules';
import Dashboard from './pages/Dashboard';
import Racelist from './pages/Racelist';
import Mint from './pages/Mint'
import Blockgen from './pages/Blockgen';
import Vision from './pages/blog/Vison'
import PrivateRoute from './components/routing/PrivateRoute';
import { loadUser } from './actions/register';
import setAuthToken from './utils/setAuthToken';
import Tokenomics from './pages/blog/Tokenomics';

function App() {

  

  useEffect ( () => {
    if(localStorage.token){
      setAuthToken(localStorage.token);
      loadUser();
    }
  },[]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/vision" element={<Vision/>}/>
        <Route path="/tokenomics" element={<Tokenomics/>}/>
        <Route path="/metamask" element={<Metamask/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/minerProfile" element={<MinerProfile/>}/>
        <Route path="/chapters" element={<Chapters/>}/>
        <Route path="/basics" element={<Basics/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/learning" element={<PrivateRoute><Learning/></PrivateRoute>}/>
        <Route path="/modules" element={<PrivateRoute><Modules/></PrivateRoute>}/>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        <Route path="/racelist" element={<PrivateRoute><Racelist/></PrivateRoute>}/>
        <Route path="/blockgen" element={<PrivateRoute><Blockgen/></PrivateRoute>}/>
        <Route path="/mint" element={<PrivateRoute><Mint/></PrivateRoute>}/>
        {/* <Route path="/race" element={<Race socket={socket}/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
