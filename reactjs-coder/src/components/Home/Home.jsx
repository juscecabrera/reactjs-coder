import React from 'react';
import '../../main.css';
import HomeImg from "../../assets/home-img.jpg"

function Home() {;
  return (
    <div>
      <h1>Bienvenido a PetShop</h1>
      <img className='home-img' src={HomeImg}></img>
    </div>
  )
}

export default Home;