import Styled from "styled-components";

export const CaroUsel = Styled.div`
.caixa {
  text-align: center;
}

.caixa h1 {
  font-size: 50px;
  color: red;
}

.containerr {
  width: 100%;
  height: 60%;
  text-align: center;
  padding: 15px;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
}

.containerr::-webkit-scrollbar {
  display: none;
}

.containerr .carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(16, 87, 150, 0.288);
  width: 90%;
  min-height: 200px;
  margin: auto;
}

.item {
  width: 100%;
  padding-top: 15px;
  margin: 7px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.foto {
  width: 150px;
  height: 160px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
}


.item .foto img {

  width: 75%;
  max-height: 200px;
  border-radius: 10px;
}

.item h5 {
  color: aliceblue;
  padding-top: 10px;
}

.item p {
  color: aliceblue;
  padding-top: 10px;
}

.buttons button {
  background-color: transparent;
  border: none;
  cursor: pointer;

}

.buttons button:first-child {
  transform: rotate(180deg);
}
  
  `;