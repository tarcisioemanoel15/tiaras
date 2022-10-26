
import { CaroUsel } from "./styled";
import { useEffect, useState } from 'react';


function Carousel() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('./static/item.json')
      .then(res => res.json())
      .then(setData);
  }, [])

  if (!data || !data.length) return null;

  return (
    <CaroUsel>

      {
        data.map((item) => {
          const { id, image } = item;

          return (
            <div className="testJSON" key={id}>

              <h1>{id}</h1>
              <img src={image} alt="as" />
              <h1><img src="./static/01.jpg" alt="aaaaaaaaaaaaa" /></h1>

            </div>
          );

        })
      }




    </CaroUsel>
  )

}

export default Carousel;