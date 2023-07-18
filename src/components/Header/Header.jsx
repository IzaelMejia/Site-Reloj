import React from 'react'
import "./Header.css";
import poster from "./reloj.jpg";


const Header = () => {
  return (
    <div className="header-container">
        
        <h1>Aprovecha las promociones que tenemos</h1>
      <img src={poster} alt="poster" width={400} />
    </div>
  )
}

export default Header