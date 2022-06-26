

import './App.css';
import FanaTv from './Component/FanaTv';
import Header from './Component/Header';
import Jumbotron from './Component/Jumbotron';
import MainSection from './Component/MainSection';
import Navbar from './Component/Navbar';
import Text from './Component/Text';
import Tntena from './Component/Tntna/Tntena';
import Zena from './Component/Zena';
import Radio from './Component/Radio/Radio';
import Tech from './Component/Tech';
import Fanacollection from './Component/Fanacollection';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fotter from './Component/Fotter';
import { useState,useRef,useEffect } from 'react';
function App() {

  return (
    <div>
      <Header/>
      <Jumbotron/>
 <Navbar/>
 <Text/>
 <Zena/>
 <FanaTv/>
 <MainSection/>
 <Tntena/>
 <Radio/>
 <Tech/>
 <Fanacollection/>
<Fotter/>
 

  
  </div>
  );
}

export default App;
