
import React from 'react';
import styled from 'styled-components';
const Container=styled.div`
height:500px; ;
margin-top:20px; ;
background-color:red;

`;
const Image=styled.div`
height:100%; ;
width:100% ;
margin-top:20px; ;
img{
    height:100%; 
    width:100% ;
    box-sizing:cover ;
}

`;
function AdImage() {
  return (
    <Container>
     <Image>
        <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img/https://www.fanabc.com/wp-content/uploads/2019/10/photo_2021-09-20_18-45-02.jpg'/>
     </Image>
    </Container>
  )
}

export default AdImage