import {React, useRef, useState} from "react"; 


function Cilindro(){
    const [volumen, setVolumen] = useState(0);

    const altura = useRef(null);
    const radio = useRef(null);
    const pi = Math.PI;


    const calcular = () => {
        const h = Number(altura.current.value);
        const r = Number(radio.current.value);
        setVolumen(calcularVolumen(h, r)) 
    }
    const calcularVolumen = (h, r) =>{
         const resultado = (pi * r ** 2) * h;
         return resultado;
    }


  return(
    <div className="blog">
        <h1 className="blog__title">Soy un Cilindro</h1>
        <img className="blog__img" src="" alt="Cilindro" />
        <p className="blog__text"></p>
        <form className="form">
            <div className="inputs__container">
                <div>
                    <label>Altura</label>
                    <input type="number" ref={altura} />
                </div>
                <div>
                    <label>Radio</label>
                    <input type="number" ref={radio} />
                </div>

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

export default Cilindro;