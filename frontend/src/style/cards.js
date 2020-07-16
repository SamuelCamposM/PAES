import styled from "@emotion/styled";


export const Card = styled.article`
height:170px;
width:25%;
display:flex;
flex-direction:column;
padding:10px;

margin:10px;
align-content:center;
justify-content:space-between;
border-radius:10px;
box-shadow:2px 2px 3px gray ;
background-color:#ccc;
  &:hover {
  }
  & h5 {
    text-align:center;
  }
`;

export const ProfileAvatar = styled.img`
width:50%;
height:60%;
margin:0 auto;
border-radius:100px;
`;
export const AddFriend = styled.button`
border:1px solid transparent;
transition:all 500ms ;
background-color:#4a148c;
padding:10px;
color:white;
border-radius:8px;

margin:0 auto;
&:hover{
  background-color:#12005e;
}
`;

export const DeleteFriend = styled.button`
border:1px solid transparent;
transition:all 500ms ;
background-color:#d50000;
padding:8px;
color:white;
border-radius:8px;

margin:0 auto;
&:hover{
  background-color:#9b0000;
}
`;