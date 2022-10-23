import styled from "styled-components";

import milpxfundo1 from "../../assets/img/1000pxfundo1.jpg";
import milpxfundo2 from "../../assets/img/500pxfundo1.jpg";
import milpxfundo3 from "../../assets/img/1fundopequeno.jpg";

export const Main = styled.article`
display: grid;
justify-content: center;
background: #f388e08c;
padding: 15px;
border-radius: 50px 0px 0px 0px ;
color: black;
width: 30%;
height: 28%;

position: absolute;
bottom: 56.9%;
left: 3%;
text-align: center;

@media screen and (max-width: 800px){
left: 0%;
bottom:  0%;
border-radius: 0;
width: 35%;
}



@media screen and (max-width: 550px){
height: 45%;
}

`;

export const Main1 = styled.article`
display: grid;
justify-content: center;
padding: 15px;
background: #f388e08c;
color: black;
width: 30%;
height: 28%;
position: absolute;
bottom: 29%;
left: 3%;
text-align: center;
@media screen and (max-width: 800px){
  left: 35%;
  bottom: 0;
}

 
@media screen and (max-width: 550px){
height: 45%;
}
 
`;

export const Main2 = styled.article`
display: grid;
justify-content: center;
padding: 15px;
 background: #f388e08c;
 color: black; 
 border-radius: 0px 0px 50px 0px ;
 
width: 30%;
height: 28%;
position: absolute;
bottom: 1%;
left: 3%;
text-align: center;
@media screen and (max-width: 800px){
  left: 65%;
  bottom: 0%;
  border-radius: 0;
  width: 32%;
}


@media screen and (max-width: 550px){
height: 45%;
}

`;




export const FundoImg = styled.article`
background-color: aliceblue;
background-image: url(${milpxfundo1});
background-size: cover;
background-position: center right;

bottom: -1;
width: 100vw;
height: 95vh;
position: absolute;

@media screen and (max-width: 800px){
  background-image: url(${milpxfundo2});
}


@media screen and (max-width: 590px){
  background-image: url(${milpxfundo3});
  background-position: center center;
  height: 65vh;
}

`;



export const Span = styled.span`
width: 100px;
background-color: black;
color: wheat;

display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
`;
