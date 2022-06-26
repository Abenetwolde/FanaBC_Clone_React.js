import React from 'react'
import styled from 'styled-components'
import RightList from './RightList';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
const Container =styled.div`

display:flex ;
gap:10px;
@media (max-width:768px){
  display:grid ;
grid-template-columns: repeat(1, 1fr);
gap:10px;

 



}

`;
const Left =styled.div`
flex:0.73 ;
margin-left:40px;
display:grid ;
grid-template-columns: repeat(2, 1fr);
gap:10px;
@media (max-width:768px){
  display:grid ;
grid-template-columns: repeat(1, 1fr);
gap:20px;

 



}

`;
const Leftwrapper =styled.div`
display:flex ;



`;
const Right =styled.div`

padding-left:50px;
img{
    height:350px; ;
    width:100% ;
    box-sizing:cover;
}
flex:0.22 ;

`;
const List=styled.div`

align-items:center ;

`;
const SImage=styled.div`

height:250px; ;
@media (max-width:768px){
flex:1 ;
margin:10px; ;

 



}
img{
    height:100% ;
    width:100% ;
    box-sizing:cover ;
}


`;
const C=styled.div`
display:flex ;
flex-direction:column ;
 
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

const Title=styled.div`

margin-top:40px ;
margin-left:50px;
margin-right:50px;
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
    color:red!important;
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
function Tech() {
  return (
    <div>
             <Title>
        <Red></Red>
       
        <p> ቴክ</p>
        <Divider></Divider>
        
    </Title>
    <Container>
   
    <Left>
    
    <Leftwrapper>
       
    <List>
                

              

                <C>
                <SImage>
                 <img src='https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/289677881_423486173124169_820988995158509946_n.jpg?stp=dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Mxvwwkxr7ikAX8Uwo3x&_nc_ht=scontent.fadd1-1.fna&oh=00_AT9UtWxoorYWlgNjBK84Y8-iod_QrrET7h_qIm-N9CUySQ&oe=62BB0F78'/>
                </SImage>
                 <T>
                  <p className='main'>በአማራ ክልል በአንድ ጀምበር ከ250 ሚሊየን በላይ ችግኝ ለመትከል መታቀዱ ተገለጸ</p>
                  <p className='sub'>Jun 24, 2022</p>
                  <p>አዲስ አበባ፣ ሰኔ 13፣ 2014 (ኤፍ ቢ ሲ) ቻይና “ቲ ፒ 500” የተሰኘ የመጀመሪያውን ግዙፍ ሰው አልባ ዕቃ ጫኝ አውሮፕላን አስተዋውቃለች። አውሮፕላኑ የተሠራው አቪየሽን ኢንዱስትሪ…</p>
                </T> 
                </C>


              </List>
             
    </Leftwrapper>
    <RightList/>
    </Left>
    <Right>
  <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img/https://www.fanabc.com/wp-content/uploads/2019/10/hagere.jpg'/>
    </Right>
    </Container>
    </div>
  )
}

export default Tech