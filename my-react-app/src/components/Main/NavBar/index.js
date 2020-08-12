import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function Navbar() {
  return (
    <div>
    <nav className="  navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav fixed-top ">
      <div className="container">
        {/* Start Header Navigation */}
        <div className="navbar-header">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars" />
          </button>
          <a className="navbar-brand" href="#"><img src="https://logopond.com/logos/2605ed4ca4edc9ac803d7dd6be946667.png" className="logo" alt="" width="40%" /></a>
        </div>
        {/* End Header Navigation */}
        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
            <li className="nav-item active"><Link className="nav-link" to="/">Trang chủ</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/conact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Product</Link></li>
          </ul>
        </div>
      </div>
      <div class="attr-nav">
        <ul>
          <li class="search"><a href="#"><i class="fa fa-search"></i></a></li>
        </ul>
      </div>
      
    </nav>
  <br/>
  <br/><br/><br/>
            <img src="https://dautaydalat.vn/wp-content/uploads/2019/10/banner-1.png"  width ="100%" height ="30%"className="img-fluid" alt="Image" />
            </div> 
  )
}