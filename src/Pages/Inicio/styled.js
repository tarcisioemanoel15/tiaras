import styled from "styled-components";

export const Main = styled.article`
background: #f388e08c;

border-radius: 50px 0px 0px 0px ;
color: black;
width: 30%;
height: 29%;

position: absolute;
bottom: 56.9%;
left: 3%;
text-align: center;

@media screen and (max-width: 800px){
left: 5%;
bottom: 0;
color:white;
  
}
`;

export const Main1 = styled.article`
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
  color:white;

  
}
`;

export const Main2 = styled.article`
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
  color:white;

  
}

`;




export const FundoImg = styled.article`
position: absolute;

background-image: url("/imgs/1000pxfundo1.jpg");
background-position: center right;
background-size: cover;
bottom: -1;
color: yellow;
width: 100vw;
height: 85vh;

@media screen and (max-width: 800px){
  background-image: url("/imgs/500pxfundo1.jpg");

  
}

@media screen and (max-width: 590px){
  background-image: url("/imgs/1fundopequeno.jpg");
  background-position: center center;
  height: 65vh;
   


  
}


`;