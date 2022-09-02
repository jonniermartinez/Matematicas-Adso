import React from "react";
import { Link } from "react-router-dom";
import images from "../assets/images"

function Navegacion(){
  return(
    <nav className="nav">
      <Link to='/' className="nav__logo">
        <img src={images.jonnier} alt="jonnier" className="nav__img"/>
      </Link>
      <ul className="nav__list">
        <li className="list__item"><Link className="item__link" to="/">Inicio</Link></li>
        <li className="list__item"><Link className="item__link" to="figuras">figuras</Link></li>
        <li className="list__item"><Link className="item__link" to='solido-irregular'>Solido irregular</Link></li>
      </ul>
      <a href="https://www.jonniermartinez.com/" target="_blank" className="button nav__button">My page</a>
    </nav>  
  )

}

export default Navegacion;
