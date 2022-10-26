import { CaroUsel } from "./styled";
import fundopequeno from "./images/01/1fundopequeno.jpg";

import imagesJson from "../../images.json";


function Carousel() {

  return (
    <CaroUsel>

      {
        imagesJson.map(res => {

          return (
            <div className="item" key={res.id}>
              <h1>{res.id}</h1>
              <img src={res.image} alt="err" />
              <p>{res.preco}</p>
            </div>
          );



        })
      }

      <img src={fundopequeno} alt="as" />



    </CaroUsel>
  )

}









































// import { useEffect, useRef, useState } from 'react';

// import imagesJson from "./images/images.json";
// import chevron from "./images/01/1fundopequeno.jpg";

// function Carousel() {

//   const [data, setData] = useState(null);
//   const carouusel = useRef();

//   useEffect(() => {
//     fetch(`${imagesJson}`)
//       .then(response => response.json())
//       .then(setData);
//   }, []);

//   const handleDireitaClick = (e) => {
//     e.preventDefault();
//     carouusel.current.scrollLeft -= carouusel.current.offsetWidth;
//   }

//   const handleEsquerdaaClick = (e) => {
//     e.preventDefault();
//     carouusel.current.scrollLeft += carouusel.current.offsetWidth;
//   }




//   if (!data || !data.length) return null;

//   return (
//     <CaroUsel>

//       <div className="caixa">
//         <h1>Tiaras</h1>
//         <div className="containerr" ref={carouusel}>



//           {data.map((item) => {
//             const { id, image, price } = item;
//             return (

//               <div className="carousel" >

//                 <div className="item" key={id} >

//                   <div className="foto">
//                     <img src={image} alt="Tara1" />
//                   </div>

//                   <h5>R$: {price}</h5>
//                   <p>id: {id}</p>
//                 </div>

//               </div>
//             );
//           })}
//         </div>

//         <div className="buttons">
//           <button onClick={handleDireitaClick}> <img src={chevron} alt="direita" /> </button>
//           <button onClick={handleEsquerdaaClick}> <img src={chevron} alt="esquerda" /> </button>
//         </div>


//       </div>
//     </CaroUsel>
//   );
// }

export default Carousel;