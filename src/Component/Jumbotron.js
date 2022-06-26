import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
height: 150px;
width:100vw ;
background-color: #0063AF;
display: flex ;
align-items:center ;
@media (max-width:768px){
  display:none ;
}

`;
const ImageContainer=styled.div`
margin-top:10px ;
flex:0.4 ;
height:100% ;
padding-top:15x ;
padding-left:30px ;
align-items: center ;
justify-content:center ;
img{
    align-items: center ;
    height:90% ;
    box-sizing:contain ;
}
`;
const Image=styled.div`
margin-top:25px ;
flex:0.6 ;
height:100% ;
;
padding-right:30px ;
align-items: center ;
justify-content:center ;
img{
    align-items: center ;
    height:80% ;
    box-sizing:contain ;
}
`;
function Jumbotron() {
  return (
   <Container>
    <ImageContainer>
        <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img/https://www.fanabc.com/wp-content/uploads/2021/04/FBC-LOGO.png'/>
    </ImageContainer>
    
    <Image>
        <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img/https://www.fanabc.com/wp-content/uploads/2020/09/awash-1.png'/>
    </Image>  
    
   </Container>
  )
}

export default Jumbotron