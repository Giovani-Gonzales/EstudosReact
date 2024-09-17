import { useState } from 'react'

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Content from './components/Content';

import 'react-bootstrap';


function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Content/>
    </>
  )
}

export default App
