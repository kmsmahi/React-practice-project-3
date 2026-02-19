import React, { useState } from 'react'
import Navbar from './componenets/Navbar/Navbar'
import BannerCard from './componenets/BannerCard/BannerCard'
function App() {
  const[toggle,setToggle]=useState('all');
  console.log(toggle);
  return (
    <>
    <Navbar></Navbar>
    <BannerCard toggle={toggle} setToggle={setToggle}></BannerCard>
    </>
  )
};
export default App
