import styled from "@emotion/styled"
export const Contenedor = styled.div`
width: 90%;
min-height: 80vh;
height: 100vh;
padding-bottom: 20px;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
flex-grow: 1;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 0.9fr 0.9fr 0.9fr 0.9fr;
grid-column-gap: 20px;
@media (max-width: 980px) {
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
}
`;

export const LeftContainer = styled.div`
border-bottom: 1px solid #676ad1;
@media (max-width: 980px) {
  border-bottom: none;
  margin-bottom: 15px;
}
`;
export const RightContainer = styled.div`
border-bottom: 1px solid #676ad1;
`;
export  const Texto = styled.p`
margin-top: 15px;
font-size: 18px;
font-family: "Roboto";
margin-bottom: -80px;
flex-basis: 100%;
@media (max-width: 700px) {
  font-size: 17px;
}
@media (max-width: 600px) {
  font-size: 14px;
}
`;

export  const Image = styled.img`
width: 90%;
margin-bottom: 30px;
margin-top: 5px;
`;

export const Submenu = styled.ul`
width: 50%;
display: flex;
margin: 0 auto;
height: 10vh;
align-items: center;
justify-content: space-around;
text-align: center;
list-style: none;
`;
export const ItemList = styled.li`
margin-top: 15px;
`;
export const Scrollers = styled.button`
border: none;
text-decoration: none;
border-bottom: 1px solid transparent;
font-size: 25px;
color: #303e9f;
background-color: transparent;
padding: 8px;
transition: all 500ms;
&:hover {
  background-color: #ccc;
  color: #11005e;
  border-bottom: 1px solid #11005e;
}
`;
