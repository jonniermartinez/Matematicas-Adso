import {React, useRef, useState} from "react";
import images from "../assets/images"

function Cuadrado(){
    const [area, setArea] = useState(0);
    const [perimetro, setPerimetro] = useState(0);

    const aInput = useRef(null);


    const handleClick = () => {
        console.log("Me clicaste")
        setArea(calcularArea())
        setPerimetro(calcularPerimetro())
    }
    const calcularArea = () =>{
         const ladoA = Number(aInput.current.value);
         const resultado = ladoA * ladoA;
         return resultado;
    }
    const calcularPerimetro = () =>{
        const ladoA = Number(aInput.current.value);
        const resultado = ladoA + ladoA + ladoA + ladoA;
        return resultado;
   }


  return(
    <div className="blog">
        <h1 className="blog__title">Cuadrado</h1>
        <img className="blog__img" src={images.cuadrado} alt="cuadrado" />
        <p className="blog__text"></p>
        <div className="form">
            <div className="inputs__container">

                    <label>lado a</label>
                    <input type="number" ref={aInput}/>

            </div>
            <button onClick={handleClick} className="button form__button">Calcular</button>
        </div>
        <div className="resultados">
                <h3>Resultados</h3>
                <p>Area: {area}</p>
                <p>Perimetro: {perimetro}</p>
        </div>
    </div>
  )

}

export default Cuadrado;