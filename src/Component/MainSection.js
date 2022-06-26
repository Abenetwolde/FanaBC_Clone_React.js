import React from 'react'
import styled from 'styled-components';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PublicIcon from '@mui/icons-material/Public';
import Mbody from './Mbody';
const Container=styled.div`
margin:50px;
/* //background-color:lightblue; */
padding:5px;
display:flex ;
flex-direction:column ;

`;
const TitleContainer=styled.div`
 display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap:25px;
align-items:center ;
@media (max-width:768px){
    display: none;

 



}


`;
const Title=styled.div`
 display: flex;
  gap:5px;
align-items:center ;
p{
    color:balck;
    font-size:20px ;
    font-weight:700;
}
.i{
    font-size:28px!important;
    color:grey!important;
}
`;
const Red=styled.div`
height:18px; 
width:30px ;
background-color:#E80028;
`;
const Divider=styled.div`
height:1px; 
width:100% ;
margin-left:10px;
background-color: grey;
`;

function MainSection() {
  return (
  <Container>
   <TitleContainer>
    <Title>
        <Red></Red>
        <NewspaperIcon className='i'/>
        <p> ኢትዮጵያ</p>
        <Divider></Divider>
        
    </Title>
    <Title>
        <Red></Red>
        <PublicIcon className='i'/>
        <p> አለም</p>
        <Divider></Divider>
        
    </Title>
    <Title>
        <Red></Red>
        <NewspaperIcon className='i'/>
        <p>ፋናመልቲሚዲያ</p>
        <Divider></Divider>
        
    </Title>
   </TitleContainer>
   <Mbody/>
  </Container>
  )
}

export default MainSection