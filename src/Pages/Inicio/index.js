import { Main, Main1, Main2, FundoImg, Span } from "./styled";
import Transparent from "../../assets/img/Transparent.png";



export default function Inicio() {
  return (
    <div className="inicio">


      <FundoImg>

        <Main>
          <h6>ID: 1</h6>
          <img src={Transparent} alt="erroTiara" />
          <Span>
            <span>R$: 30,00</span>
          </Span>

        </Main>

        <Main1>
          <h6>ID: 2</h6>
          <img src={Transparent} alt="erroTiara" />
          <Span>
            <span>R$: 30,00</span>
          </Span>
        </Main1>


        <Main2>
          <h6>ID: 3</h6>
          <img src={Transparent} alt="erroTiara" />
          <Span>
            <span>R$: 20,00</span>
          </Span>
        </Main2>

      </FundoImg>

    </div >
  );

}