import styled from "@emotion/styled";


export const Card = styled.div`
margin:10px ;

width:280px;

display:flex;
flex-wrap:wrap;
border:1px solid #ccc;
padding-bottom:15px;
justify-content:center;
border-radius:15px 15px 30px 15px;
background-color:#ccc;
box-shadow:1px 1px 3px gray;

& p{
    width:80%;
    text-align:center;
}
@media(max-width:830px ){
  flex-grow:1;
}

`

export const  Imagen = styled.img`
width:100%;
min-height:35vh;
max-height:35vh;
border-radius:15px 15px 0px 0px;
`

export const DeleteFriend = styled.button`
font-size:12px;
color:white;
border:none;
background-color:#ab133a;
padding:8px;
transition:all 500ms;
border-radius:3px;
font-size:13px;
&:hover{
    background-color:#440112;
}
`
export const AddFriend = styled.button`
font-size:12px;
color:white;
border:none;
background-color:#471882;
padding:8px;
transition:all 500ms;
border-radius:3px;
&:hover{
    background-color:#180233;
}
`
export const Botones = styled.section`
display:flex;
width:100%;
justify-content:space-evenly;


`