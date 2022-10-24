import { useEffect, useRef, useState } from 'react';
import { CaroUsel } from "./styled";
function Carousel() {

  const [data, setData] = useState(null);
  const carouusel = useRef();

  useEffect(() => {
    fetch('./static/images/Tiara/tiaras.json')
      .then(response => response.json())
      .then(setData);
  }, []);

  const handleDireitaClick = (e) => {
    e.preventDefault();
    carouusel.current.scrollLeft -= carouusel.current.offsetWidth;
  }

  const handleEsquerdaaClick = (e) => {
    e.preventDefault();
    carouusel.current.scrollLeft += carouusel.current.offsetWidth;
  }




  if (!data || !data.length) return null;

  return (
    <CaroUsel>

      <div className="caixa">
        <h1>Tiaras</h1>
        <div className="containerr" ref={carouusel}>



          {data.map((item) => {
            const { id, image, price } = item;
            return (

              <div className="carousel" >

                <div className="item" key={id} >

                  <div className="foto">
                    <img src={image} alt="Tara1" />
                  </div>

                  <h5>R$: {price}</h5>
                  <p>id: {id}</p>
                </div>

              </div>
            );
          })}
        </div>

        <div className="buttons">
          <button onClick={handleDireitaClick}> <img src="/static/images/216151_right_chevron_icon.png" alt="direita" /> </button>
          <button onClick={handleEsquerdaaClick}> <img src="/static/images/216151_right_chevron_icon.png" alt="esquerda" /> </button>
        </div>


      </div>
    </CaroUsel>
  );
}

export default Carousel;