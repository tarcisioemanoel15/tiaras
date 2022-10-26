import { FundoImg } from "./styled";
import Transparent from "../../assets/img/Transparent.png";



export default function Inicio() {
  return (
    <div className="inicio">


      <FundoImg>

        <article>

          <div>
            <h6>ID: 1</h6>
            <img src={Transparent} alt="erroTiara" />
            <span>R$: 30,00</span>
          </div>



          <div>
            <h6>ID: 2</h6>
            <img src={Transparent} alt="erroTiara" />
            <span>R$: 30,00</span>
          </div>



          <div>
            <h6>ID: 3</h6>
            <img src={Transparent} alt="erroTiara" />
            <span>R$: 20,00</span>
          </div>

        </article>

      </FundoImg>

    </div >
  );

}