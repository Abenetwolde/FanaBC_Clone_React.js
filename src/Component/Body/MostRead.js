
import React from 'react'
import styled from 'styled-components'
import MoneyIcon from '@mui/icons-material/Money';
const Container=styled.div`
margin-top:40px;
display:flex ;
flex-direction:column ;
`;
const Title=styled.div`
margin-top:30px ;
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
const R=styled.div`
padding:3px;
display:flex ;
flex-direction: column;

`;

const List=styled.div`
display:grid ;
gap:20px;
 grid-template-columns: repeat(2, 1fr);
align-items:center ;

`;
const SImage=styled.div`


img{
    height:100px ;
    width:100% ;
    box-sizing:cover ;
}


`;
const C=styled.div`
display: grid;
 
gap:10px;
margin-top:10px;
`;
const T=styled.div`

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

function MostRead() {
  return (
   <Container>
        <Title>
        <Red></Red>
       
        <p>  በብዛትየተነበቡ</p>
        <Divider></Divider>
        
    </Title>
    
    <List>
                

              

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
   </Container>
  )
}

export default MostRead