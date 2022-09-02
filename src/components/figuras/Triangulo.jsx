import {React, useRef, useState} from "react"; 
import images from "../../assets/images";

function Triangulo(){
    const [area, setArea] = useState(0);
    const [perimetro, setPerimetro] = useState(0);

    const baseInput = useRef(null);
    const alturaInput = useRef(null);


    const calcular = () => {
        const base = Number(baseInput.current.value);
        const altura = Number(alturaInput.current.value);
        setArea(calcularArea(base, altura)) 
        setPerimetro(calcularPerimetro(base, altura))
    }
    const calcularArea = (base, altura) =>{
         const resultado = (base * altura) / 2;
         return resultado;
    }
    const calcularPerimetro = (base, altura) =>{
        const resultado = base * 3;
        return resultado;
   }

  return(
    <div className="blog">
        <h1 className="blog__title">Triangulo Equilatero</h1>
        <img className="blog__img" src={images.triangulo} alt="Triangulo" />
        <p className="blog__text"></p>
        <form className="form">
            <div className="inputs__container">
                <div>
                    <label>Base</label>
                    <input type="number" ref={baseInput}/>
                </div>
                <div>
                    <label>Altura</label>
                    <input type="number" ref={alturaInput}/>
                </div>
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

export default Triangulo;