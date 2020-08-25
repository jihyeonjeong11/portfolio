import React, {useEffect, useState} from 'react';
import './App.css';
import Cards from './cards/Cards';
import Header from './Header';

function App() {
  const [matchesQuery, change]= useState(window.matchMedia("(max-width: 400px)").matches ? 'mobile' : 'pc');
  const changeQuery = () => {
    const matches = window.matchMedia("(max-width: 400px)").matches  ? 'mobile' : 'pc';
    if(matches === matchesQuery){
      return;
    } else {
      change(matches)
    }
  }
  window.onresize = changeQuery;
  
  return (
    <div >
      <Header matchesQuery={matchesQuery} />
      <Cards matchesQuery={matchesQuery} />
    </div>
  );
}

export default App;
