import {React, useRef, useState} from "react"; 
// https://yosoytuprofe.20minutos.es/2020/04/08/area-y-perimetro-de-un-rombo/
function Rombo(){
    const [area, setArea] = useState(0);
    const [perimetro, setPerimetro] = useState(0);

    const DiagonalInput = useRef(null);
    const diagonalInput = useRef(null);


    const calcular = () => {
        const diagonalMenor = Number(diagonalInput .current.value);
        const diagonalMayor = Number(DiagonalInput .current.value);
        const lado = Math.sqrt(Math.pow(diagonalMayor/2, 2) + Math.pow(diagonalMenor/2, 2));
        setArea(calcularArea(diagonalMayor, diagonalMenor, lado));
        setPerimetro(calcularPerimetro(diagonalMayor, diagonalMenor, lado));
    }
    const calcularArea = (diagonalMayor, diagonalMenor, lado) =>{
         const resultado = (diagonalMayor * diagonalMenor) / 2;
         return resultado;
    }
    const calcularPerimetro = (diagonalMayor, diagonalMenor, lado) =>{
        const resultado = lado + lado + lado + lado;
        return resultado;
   }


  return(
    <div className="blog">
        <h1 className="blog__title">Soy un Rombo</h1>
        <img className="blog__img" src="" alt="Rombo" />
        <p className="blog__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt autem dolore illo nulla laudantium minima.</p>
        <form className="form">
            <div className="inputs__container">
                <div>
                    <label>Diagonal mayor</label>
                    <input type="number" ref={DiagonalInput}/>
                </div>
                <div>
                    <label>Diadonal menor</label>
                    <input type="number" ref={diagonalInput}/>
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

export default Rombo;