import {React, useRef, useState} from "react"; 

function Rectangulo(){
    const [area, setArea] = useState(0);
    const [perimetro, setPerimetro] = useState(0);

    const aInput = useRef(null);
    const bInput = useRef(null);


    const calcular = () => {
        const ladoA = Number(aInput.current.value)
        const ladoB = Number(bInput.current.value)
        setArea(calcularArea(ladoA, ladoB)) 
        setPerimetro(calcularPerimetro(ladoA, ladoB))
    }
    const calcularArea = (ladoA, ladoB) =>{
         const resultado = ladoA * ladoB;
         return resultado;
    }
    const calcularPerimetro = (ladoA, ladoB) =>{
        const resultado = ladoA + ladoA + ladoB + ladoB;
        return resultado;
   }


  return(
    <div className="blog">
        <h1 className="blog__title">Soy un Rectangulo</h1>
        <img className="blog__img" src="" alt="Rectangulo" />
        <p className="blog__text"></p>
        <form className="form">
            <div className="inputs__container">
                <div>
                    <label>lado a</label>
                    <input type="number"  ref={aInput}/>
                </div>
                <div>
                    <label>lado b</label>
                    <input type="number"  ref={bInput}/>
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

export default Rectangulo;