import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import Overlay from './components/Overlay';
import About from './components/About';
import M from 'materialize-css';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Sidebar from './SideBar/Sidebar';
import Header from './Header';

function App() {

  useEffect(() => { M.AutoInit(); }, [])
  const [matchesQuery, change] = useState(window.matchMedia("(max-width: 990px)").matches ? 'mobile' : 'pc');

  const changeQuery = () => {
    const matches = window.matchMedia("(max-width: 990px)").matches ? 'mobile' : 'pc';
    if (matches === matchesQuery) {
      return;
    } else {
      change(matches)
    }
  }
  window.onresize = changeQuery;

  return (
    <Fragment >

      <Header matchesQuery={matchesQuery} />
      <div class='' style={{ paddingLeft: matchesQuery === 'pc' ? 190 : 0 }}>
        <Overlay matchesQuery={matchesQuery} />
        <About matchesQuery={matchesQuery} />
        <Experience matchesQuery={matchesQuery} />
        <Projects matchesQuery={matchesQuery} />
        <Skills matchesQuery={matchesQuery} />
        <Contact matchesQuery={matchesQuery} />
      </div>

      {/* <Cards matchesQuery={matchesQuery} /> */}

    </Fragment>
  );
}

export default App;
