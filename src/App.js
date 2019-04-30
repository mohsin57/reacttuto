import React from 'react';
import './App.css';
import Navbar from './components/Navbar' ;
import MainContent from'./components/MainContent';
import Footer from './components/Footer';
import Cal from './components/Cal';
import NewApp from './components/NewApp';



function App(){

  return(
<div>
    <Navbar/>
     <MainContent/>
    <Cal/>
    <NewApp />
    <Footer/> 
    </div>
  )
}

export default App;
