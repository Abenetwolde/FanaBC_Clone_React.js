import React from 'react'
import styled from 'styled-components'
const List=styled.div`
display:flex ;
flex-direction:column;
align-items:center ;

`;
const SImage=styled.div`
flex:0.3;

img{
    height:80px ;
    width:100% ;
    box-sizing:cover ;
}


`;
const C=styled.div`
display:flex ;
gap:10px;
margin-top:10px;
`;
const T=styled.div`
flex:0.8 ;
width:100% ;
flex-direction:column;
.main{
font-size: 13px;;
padding-top:6px;
font-weight:700;
}
.sub{
    font-size: 12px;;
    padding-top:6px;
    color:grey ;
}

`;
const RIght=styled.div`
flex:0.32;



`;

function RightList() {
  return (
    <List>
              

         
    <C>
    <SImage>
    <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img/https://www.fanabc.com/wp-content/uploads/2022/06/289948768_5286836871407009_4206487887683653291_n-750x430.jpg'/>
    </SImage>
     <T>
      <p className='main'>በአማራ ክልል በአንድ ጀምበር ከ250 ሚሊየን በላይ ችግኝ ለመትከል መታቀዱ ተገለጸ</p>
      <p className='sub'>Jun 24, 2022</p>
    </T> 
    </C>     

    <C>
    <SImage>
     <img src='htts://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/289677881_423486173124169_820988995158509946_n.jpg?stp=dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Mxvwwkxr7ikAX8Uwo3x&_nc_ht=scontent.fadd1-1.fna&oh=00_AT9UtWxoorYWlgNjBK84Y8-iod_QrrET7h_qIm-N9CUySQ&oe=62BB0F78'/>
    </SImage>
     <T>
      <p className='main'>በአማራ ክልል በአንድ ጀምበር ከ250 ሚሊየን በላይ ችግኝ ለመትከል መታቀዱ ተገለጸ</p>
      <p className='sub'>Jun 24, 2022</p>
    </T> 
    </C>

    <C>
    <SImage>
     <img src='https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/289677881_423486173124169_820988995158509946_n.jpg?stp=dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Mxvwwkxr7ikAX8Uwo3x&_nc_ht=scontent.fadd1-1.fna&oh=00_AT9UtWxoorYWlgNjBK84Y8-iod_QrrET7h_qIm-N9CUySQ&oe=62BB0F78'/>
    </SImage>
     <T>
      <p className='main'>በአማራ ክልል በአንድ ጀምበር ከ250 ሚሊየን በላይ ችግኝ ለመትከል መታቀዱ ተገለጸ</p>
      <p className='sub'>Jun 24, 2022</p>
    </T> 
    </C>

    <C>
    <SImage>
     <img src='https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/289677881_423486173124169_820988995158509946_n.jpg?stp=dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Mxvwwkxr7ikAX8Uwo3x&_nc_ht=scontent.fadd1-1.fna&oh=00_AT9UtWxoorYWlgNjBK84Y8-iod_QrrET7h_qIm-N9CUySQ&oe=62BB0F78'/>
    </SImage>
     <T>
      <p className='main'>በአማራ ክልል በአንድ ጀምበር ከ250 ሚሊየን በላይ ችግኝ ለመትከል መታቀዱ ተገለጸ</p>
      <p className='sub'>Jun 24, 2022</p>
    </T> 
    </C>

                

              

    
  </List>
  )
}

export default RightList