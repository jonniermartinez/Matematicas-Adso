import {React, useRef, useState} from "react"; 

function Cubo(){
    const [volumen, setVolumen] = useState(0);

    const InputA = useRef(null);


    const calcular = () => {
        const a = Number(InputA.current.value);
        setVolumen(calcularVolumen(a)) 
    }
    const calcularVolumen = (a) =>{
         const resultado = Math.pow(a, 3);
         return resultado;
    }

  return(
    <div className="blog">
        <h1 className="blog__title">Soy un Cubo</h1>
        <img className="blog__img" src="" alt="cuadrado" />
        <p className="blog__text"></p>
        <form className="form">
            <div className="inputs__container">

                    <label>lado a</label>
                    <input type="number" ref={InputA} />

            </div>
            <button onClick={calcular} type="button" className="button form__button">Calcular</button>
        </form>
        <div className="resultados">
                <h3>Resultados</h3>
                <p>Volumen: {volumen}</p>
        </div>
    </div>  
  )

}

export default Cubo;