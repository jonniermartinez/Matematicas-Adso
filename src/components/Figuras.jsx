import React from "react";
import { Link, Routes, Route } from "react-router-dom"; 


function Figuras(){
  return(
    <div className="figuras__container">
        <div>
            <h2 className="figuras__title">Figuras Planas</h2>
            <div className="figuras">
                <div className="figura">
                    <Link to="../cuadrado" className="figura__link"><img className="figura__img" src="" alt="cuadrado" /></Link>
                </div>
                <div className="figura">
                    <Link to="../rectangulo" className="figura__link"><img className="figura__img" src="" alt="rectangulo" /></Link>
                </div>
                <div className="figura">
                    <Link to="../triangulo" className="figura__link"><img className="figura__img" src="" alt="triangulo" /></Link>
                </div>
                <div className="figura">
                    <Link to="../trapecio" className="figura__link"><img className="figura__img" src="" alt="trapecio" /></Link>
                </div>
                <div className="figura">
                    <Link to="../rombo" className="figura__link"><img className="figura__img" src="" alt="rombo" /></Link>
                </div>
            </div>
        </div>
        <div>
            <h2 className="figuras__title">Figuras de 3 dimensiones</h2>
            <div className="figuras">
                <div className="figura">
                    <Link to="../cubo" className="figura__link"><img className="figura__img" src="" alt="cubo" /></Link>
                </div>
                <div className="figura">
                    <Link to="../cuadrado" className="figura__link"><img className="figura__img" src="" alt="cuadrado" /></Link>
                </div>
                <div className="figura">
                    <Link to="../cuadrado" className="figura__link"><img className="figura__img" src="" alt="cuadrado" /></Link>
                </div>
                <div className="figura">
                    <Link to="../cuadrado" className="figura__link"><img className="figura__img" src="" alt="cuadrado" /></Link>
                </div>
                <div className="figura">
                    <Link to="../cuadrado" className="figura__link"><img className="figura__img" src="" alt="cuadrado" /></Link>
                </div>
            </div>
        </div>
    </div>
  )

}

export default Figuras;