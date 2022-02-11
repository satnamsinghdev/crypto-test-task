import React from 'react';
import headerLogo from '../assets/headerLogo.png';
import { useNavigate } from 'react-router';

export default function Header() {
  let navigate = useNavigate();
  let navigateGiv = useNavigate();
  let navigateDoc = useNavigate();


  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light  ">
        <a className="navbar-brand" href="#"><img src={headerLogo} width="129px" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse align-items-center" id="navbarTogglerDemo01">
        <ul className="navbar-nav m-auto ">
          <li className="nav-item active">
            <a className="nav-link navbar-header" onClick={() => navigate('/docAsset')}>Doc Assets</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-header" onClick={() => navigateGiv('/docgiv')}>Doc giv</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-header" onClick={() => navigateDoc('/buystock')}>Crypto</a>
          </li>
           <li className="nav-item">
            <a className="nav-link navbar-header" href="#">Trade</a>
          </li>
        </ul>
       <div className="button-group mobile-hide d-flex">
           <a className="nav-link " href="#">Sign up</a>
           <button className="btn custom-btn">Get the app</button>
       </div>
      </div>
    </nav>
   </div>
  )
}
