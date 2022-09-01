import React from "react"; 

function Cubo(){
    const calcular = () => {
        calcularVolumen();
        console.log("Estoy calculando")
    }
    const calcularVolumen = () =>{
    
    }

  return(
    <div className="blog">
        <h1 className="blog__title">Soy un Cubo</h1>
        <img className="blog__img" src="" alt="cuadrado" />
        <p className="blog__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt autem dolore illo nulla laudantium minima.</p>
        <form className="form">
            <div className="inputs__container">
                <div>
                    <label>lado a</label>
                    <input type="number" />
                </div>
                <div>
                    <label>lado b</label>
                    <input type="number" />
                </div>
                <div>
                    <label>Lado c</label>
                    <input type="number" />
                </div>
            </div>
            <button onClick={calcular} type="button" className="button form__button">Calcular</button>
        </form>
    </div>  
  )

}

export default Cubo;