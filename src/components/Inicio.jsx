import {React} from "react";
import { Link } from "react-router-dom";
import images from "../assets/images";

function Inicio(){
  return(
    <div className="header">
        <div className="header__content">
            <h1 className="content__title">Areas y volumenes de figuras planas y solidos</h1>
            <p className="content__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, in dicta sequi omnis iure expedita?</p>
            <Link to="figuras" className="button content__button">Ver figuras</Link>
        </div>
        <img src={images.fondo} className='header__img' alt="Fodo de matematicas" />
    </div>
  )

}

export default Inicio;