import React, { Suspense, useState } from 'react'
import Navbar from './componenets/Navbar/Navbar'
import BannerCard from './componenets/BannerCard/BannerCard'
import MainSection from './componenets/MainSection/MainSection';
const fetchData=async ()=>{
  const result=await fetch('/data.json');
  return result.json();
}
function App() {
  const[toggle,setToggle]=useState('all');
  console.log(toggle);
  const fetchPromise=fetchData();
  return (
    <>
    <Navbar></Navbar>
    <BannerCard toggle={toggle} setToggle={setToggle}></BannerCard>
    <Suspense fallback="Loading...">
      <MainSection fetchPromise={fetchPromise}></MainSection>
    </Suspense>
    </>
  )
};
export default App
