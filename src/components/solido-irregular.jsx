import React from "react";
import images from '../assets/images'
function SolidoIrregular(){
  return(
    <div className="blog">
        <h2 className="blog__title">¿Qué método utilizaría para calcular el volumen de un sólido irregular?</h2>
        <img className="blog__img" src={images.roca} alt="solido irregular" />
        <p className="blog__text">Para calcular el volumen de un sólido irregular tenemos que tener en cuenta varios factores, por ejemplo que este objeto no tiene una simetría que podamos definir y hallar una fórmula. Para resolver este problema podemos basarnos en el principio de Arquímedes, el cual afirma que todo cuerpo sumergido en un fluido experimenta un empuje vertical y hacia arriba igual al peso de fluido desalojado. Por ejemplo, si tenemos recipiente de 50 ml con el total de líquido de 35 ml y le metemos un sólido irregular que puede ser una roca y este líquido sube hasta 45 ml, podemos afirmar que el volumen del objeto es igual al volumen inicial, menos volumen final del líquido.</p>
    </div>
  )

}

export default SolidoIrregular;
