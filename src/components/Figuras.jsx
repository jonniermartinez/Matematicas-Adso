import React from "react";
import { Link, Routes, Route } from "react-router-dom"; 
import images from "../assets/images";


function Figuras(){
  return(
    <div className="figuras__container">
        <div>
            <h2 className="figuras__title">Figuras Planas</h2>
            <div className="figuras">
                <div className="figura">
                    <Link to="../cuadrado" className="figura__link"><img className="figura__img" src={images.cuadrado} alt="cuadrado" /></Link>
                </div>
                <div className="figura">
                    <Link to="../rectangulo" className="figura__link"><img className="figura__img" src={images.rectangulo} alt="rectangulo" /></Link>
                </div>
                <div className="figura">
                    <Link to="../triangulo" className="figura__link"><img className="figura__img" src={images.triangulo} alt="triangulo" /></Link>
                </div>
                <div className="figura">
                    <Link to="../trapecio" className="figura__link"><img className="figura__img" src={images.trapecio} alt="trapecio" /></Link>
                </div>
                <div className="figura">
                    <Link to="../rombo" className="figura__link"><img className="figura__img" src={images.rombo} alt="rombo" /></Link>
                </div>
            </div>
        </div>
        <div>
            <h2 className="figuras__title">Figuras de 3 dimensiones</h2>
            <div className="figuras">
                <div className="figura">
                    <Link to="../cubo" className="figura__link"><img className="figura__img" src={images.cubo} alt="cubo" /></Link>
                </div>
                <div className="figura">
                    <Link to="../cilindro" className="figura__link"><img className="figura__img" src={images.cilindro} alt="cilindro" /></Link>
                </div>
                <div className="figura">
                    <Link to="../esfera" className="figura__link"><img className="figura__img" src={images.esfera} alt="esfera" /></Link>
                </div>
                <div className="figura">
                    <Link to="../cono" className="figura__link"><img className="figura__img" src={images.cono} alt="cono" /></Link>
                </div>
                <div className="figura">
                    <Link to="../prisma" className="figura__link"><img className="figura__img" src={images.prisma} alt="prisma" /></Link>
                </div>
            </div>
        </div>
    </div>
  )

}

export default Figuras;