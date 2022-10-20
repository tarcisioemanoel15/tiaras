import { Main, Main1, Main2, FundoImg } from "./styled";
import precos30 from "../../assets/img/precos30.png";
import Transparent from "../../assets/img/Transparent.png";



export default function Inicio() {
  return (
    <div className="inicio">


      <FundoImg>

        <Main>
          <>
            <img src={Transparent} alt="erroTiara" />
            <img src={precos30} alt="erropreco" />
          </>

          <h6>ID: 1</h6>
        </Main>

        <Main1>
          <>
            <img src={Transparent} alt="erroTiara" />
            <img src={precos30} alt="erropreco" />
          </>
          <h6>ID: 2</h6>
        </Main1>

        <Main2>
          <>
            <img src={Transparent} alt="erroTiara" />
            <img src={precos30} alt="erropreco" />
          </>
          <h6>ID: 3</h6>
        </Main2>
      </FundoImg>

    </div >
  );

}