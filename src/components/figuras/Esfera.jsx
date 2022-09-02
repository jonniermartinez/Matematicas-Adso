import {React, useRef, useState} from "react"; 
import images from "../../assets/images";


function Esfera(){
    const [volumen, setVolumen] = useState(0);

    const radio = useRef(null);
    const pi = Math.PI;

    const calcular = () => {
        const r = Number(radio.current.value);
        setVolumen(calcularVolumen(r)) 
    }
    const calcularVolumen = (r) =>{
         const resultado = 4/3 * pi * (r ** 3) ;
         return resultado;
    }



  return(
    <div className="blog">
        <h1 className="blog__title">Esfera</h1>
        <img className="blog__img" src={images.esfera} alt="Esfera" />
        <p className="blog__text"></p>
        <form className="form">
            <div className="inputs__container">

                    <label>Radio</label>
                    <input type="number" ref={radio} />

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

export default Esfera;