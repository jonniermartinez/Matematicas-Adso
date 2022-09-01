import {React, useRef, useState} from "react"; 


function Cuadrado(){
    const [area, setArea] = useState(0);
    const [perimetro, setPerimetro] = useState(0);

    const aInput = useRef(null);


    const calcular = () => {
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
        <h1 className="blog__title">Soy un cuadrado</h1>
        <img className="blog__img" src="" alt="cuadrado" />
        <p className="blog__text"></p>
        <form className="form">
            <div className="inputs__container">

                    <label>lado a</label>
                    <input type="number" ref={aInput}/>

            </div>
            <button onClick={calcular} type="button" className="button form__button">Calcular</button>
        </form>
        <div className="resultados">
                <h3>Resultados</h3>
                <p>Area: {area}</p>
                <p>Perimetro: {perimetro}</p>
        </div>
    </div>  
  )

}

export default Cuadrado;