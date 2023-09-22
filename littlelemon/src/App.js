import React from 'react';
import Header from './component/header';
import Nav from './component/nav';
import Promo from './component/promo';
import './App.css';
function App() { 
  return ( 
    <><div className="App">
      <Promo/>  
      This is the starting code  "Your first component" ungraded lab 
    </div>
    <Header />
    <Nav/>
    
    </>
  ); 
} 
 
export default App;