import {React, useRef, useState} from "react"; 
import images from "../../assets/images";
// https://yosoytuprofe.20minutos.es/2020/04/16/volumen-de-un-prisma/

function Prisma(){
    const [volumen, setVolumen] = useState(0);

    const altura = useRef(null);
    const InputA = useRef(null);
    const InputB = useRef(null);



    const calcular = () => {
        const h = Number(altura.current.value);
        const ladoB = Number(InputA.current.value);
        const ladoA = Number(InputB.current.value);
        setVolumen(calcularVolumen(h, ladoA, ladoB)) 
    }
    const calcularVolumen = (h, ladoA, ladoB) =>{
         const ab = (ladoA * ladoB) / 2;
         const resultado = ab * h;
         return resultado;
    }

  return(
    <div className="blog">
        <h1 className="blog__title">Prisma</h1>
        <img className="blog__img" src={images.prisma} alt="Prisma" />
        <p className="blog__text"></p>
        <form className="form">
            <div className="inputs__container">
                <div>
                    <label>Altura</label>
                    <input type="number" ref={altura} />
                </div>
                <div>
                    <label>lado a</label>
                    <input type="number" ref={InputA} />
                </div>
                <div>
                    <label>lado b</label>
                    <input type="number" ref={InputB} />
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

export default Prisma;