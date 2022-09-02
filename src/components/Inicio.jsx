import {React} from "react";
import { Link } from "react-router-dom";
import images from "../assets/images";

function Inicio(){
  return(
    <div className="header">
        <div className="header__content">
            <h1 className="content__title">Areas y volumenes de figuras planas y solidos.</h1>
            <p className="content__text">En esta web podras observar en accion los algoritmos de las 10 figuras geometricas que elegi.</p>
            <Link to="figuras" className="button content__button">Ver figuras</Link>
        </div>
        <img src={images.mathHome} className='header__img' alt="Fodo de matematicas" />
    </div>
  )

}

export default Inicio;