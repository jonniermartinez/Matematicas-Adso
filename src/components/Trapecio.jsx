import {React, useRef, useState} from "react"; 
import images from "../assets/images";
// https://matematicasparaticharito.wordpress.com/tag/perimetro-y-area-del-trapecio/
function Trapecio(){
    const [area, setArea] = useState(0);
    const [perimetro, setPerimetro] = useState(0);

    const baseInput = useRef(null);
    const BaseInput = useRef(null);
    const ladoInput = useRef(null);
    const alturaInput = useRef(null);


    const calcular = () => {
        const baseMenor = Number(baseInput.current.value);
        const baseMayor = Number(BaseInput.current.value);
        const lado = Number(ladoInput.current.value);
        const altura = Number(alturaInput.current.value);
        setArea(calcularArea(altura, lado, baseMayor, baseMenor));
        setPerimetro(calcularPerimetro(lado, baseMayor, baseMenor));
    }
    const calcularArea = (altura, lado, baseMayor, baseMenor) =>{
         const resultado = ((baseMayor + baseMenor) * altura) / 2;
         return resultado;
    }
    const calcularPerimetro = (lado, baseMayor, baseMenor) =>{
        const resultado = baseMayor + baseMenor + (2 * lado);
        return resultado;
   }


  return(
    <div className="blog">
        <h1 className="blog__title">Trapecio isósceles</h1>
        <img className="blog__img" src={images.trapecio} alt="Trapecio" />
        <p className="blog__text"></p>
        <form className="form">
            <div className="inputs__container">
                <div>
                    <label>Base mayor</label>
                    <input type="number" ref={BaseInput}/>
                </div>
                <div>
                    <label>Base menor</label>
                    <input type="number" ref={baseInput}/>
                </div>
                <div>
                    <label>Lado</label>
                    <input type="number" ref={ladoInput}/>
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

export default Trapecio;