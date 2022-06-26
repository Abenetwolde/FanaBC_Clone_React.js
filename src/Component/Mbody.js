import React from 'react'
import styled from 'styled-components'
import MoneyIcon from '@mui/icons-material/Money';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import RightAdd from './RightAdd';
import MostRead from './Body/MostRead';
import AdImage from './Body/AdImage';
const Container=styled.div`
display:flex ;
gap:30px;
margin-top:10px ;
@media (max-width:768px){
    display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap:25px;
align-items:center ;
 



}
`;
const Left=styled.div`
flex:0.73;
padding:3px ;
justify-content:start ;
align-items:flex-start ;
display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap:5px;
  @media (max-width:768px){
    display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap:5px;
align-items:center ;
 



}
`;
const L=styled.div`
padding:3px;

display:flex ;
flex-direction:column ;
`;
const ImageContainer=styled.div`
height:300px ;
position: relative;
img{
  height:100%;
  width:100% ;
  box-sizing:cover;
}


 

 



`;
const SmallConatainer=styled.div`

position: absolute;
bottom:0px; ;


height: 25px;
padding:3px ;
background-color:#E80028 ;
p{
    color:white!important ;
    font-size: 15px;
}
`;
const Card=styled.div`
  height:100%;
  padding-top:10px;

 
 p{

  color:black ;
  font-weight:800;
  transition:all 0.2s ease-in-out ;
  &:hover{
    color:red;
    transform:scale(1.02) ;
  }
 
 }
 .p{
  color:grey ;
  font-weight:400;
  

 }
  
`;
const R=styled.div`
padding:3px;
display:flex ;
flex-direction: column;

`;

const List=styled.div`
display:flex ;
flex-direction:column;
align-items:center ;

`;
const SImage=styled.div`
flex:0.2;

img{
    height:60px ;
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
function Mbody() {
  return (
    <Container>
        <Left>
         <L>
         <Card>
               <ImageContainer>
               <SmallConatainer>
            <p>የሀገር ውስጥ ዜና</p>
        </SmallConatainer>
                <img src='https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/289344164_423488263123960_4392878555016704978_n.jpg?stp=dst-jpg_p843x403&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UkwrWE2ZR4gAX909zLB&tn=bFSfHoLPsfEw5zQg&_nc_ht=scontent.fadd1-1.fna&oh=00_AT8Vqio9VHQIAK9EYaFq9AitVcwsNOMzy_EI3u32sAMShg&oe=62B9CA3C'/>
            
               </ImageContainer>
           
               <p>  አዲሱ የውጪ ጉዳይ ሚኒስትር ቃል አቀባይ አምባሳደር መለሰ ዓለም እና የቀድሞ የውጪ ጉዳይ ሚኒስትር አምባሳደር ዲና ሙፍቲ </p>
               <br/>
               <p className='p'>  jun 22 2022</p>
              </Card>
              <List>
                

              

                <C>
                <SImage>
                 <img src='https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/289379112_425134466292673_2049720393919178655_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UPHMkJEbBO0AX_MQAYW&_nc_ht=scontent.fadd1-1.fna&oh=00_AT9-5H2IiH4n-pRZpAdxMqnkZO9PgxO9k-EKDNki_B6AUQ&oe=62BC606E'/>
                </SImage>
                 <T>
                  <p className='main'>በአማራ ክልል በአንድ ጀምበር ከ250 ሚሊየን በላይ ችግኝ ለመትከል መታቀዱ ተገለጸ</p>
                  <p className='sub'>Jun 24, 2022</p>
                </T> 
                </C>

                <C>
                <SImage>
                 <img src='https3x&_nc_ht=scontent.fadd1-1.fna&oh=00_AT9UtWxoorYWlgNjBK84Y8-iod_QrrET7h_qIm-N9CUySQ&oe=62BB0F78'/>
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
              <Title>
        <Red></Red>
        <MoneyIcon className='i'/>
        <p>  ቢዝነስ</p>
        <Divider></Divider>
        
    </Title>

    <Card>
               <ImageContainer>
               <SmallConatainer>
            <p>ስፖርት</p>
        </SmallConatainer>
                <img src='https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/289076683_423162066489913_7078101367348454299_n.jpg?stp=dst-jpg_s720x720&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AmXF0cwVc80AX8vZFFj&_nc_ht=scontent.fadd1-1.fna&oh=00_AT-CTyzMZUrPkKwuA4V3Q1fOthG7mgoKMABS7LClNaEemg&oe=62B99035'/>
            
               </ImageContainer>
           
               <p>  ዶናልድ ትራምፕ “በስልጣን ላይ ብሆን ኖሮ የዩክሬን ሩሲያ ጦርነት አይከሰትም ነበር” አሉ </p>
               <br/>
               <p className='p'>  jun 22 2022</p>
              </Card>

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

                
  
         </L>
         <R>
         <Card>
               <ImageContainer>
               <SmallConatainer>
           <p>ቢዝነስ</p>
        </SmallConatainer>
                <img src='https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/289076683_423162066489913_7078101367348454299_n.jpg?stp=dst-jpg_s720x720&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AmXF0cwVc80AX8vZFFj&_nc_ht=scontent.fadd1-1.fna&oh=00_AT-CTyzMZUrPkKwuA4V3Q1fOthG7mgoKMABS7LClNaEemg&oe=62B99035'/>
            
               </ImageContainer>
           
               <p>  ዶናልድ ትራምፕ “በስልጣን ላይ ብሆን ኖሮ የዩክሬን ሩሲያ ጦርነት አይከሰትም ነበር” አሉ </p>
               <br/>
               <p className='p'>  jun 22 2022</p>
              </Card>
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
              <Title>
        <Red></Red>
        <SportsSoccerIcon className='i'/>
        <p>  ስፓርት</p>
        <Divider></Divider>
        
        
    </Title>
    <Card>
               <ImageContainer>
               <SmallConatainer>
            <p>ስፓርት</p>
        </SmallConatainer>
                <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img/https://www.fanabc.com/wp-content/uploads/2022/06/Betking_Ethiopian_Premier_League.svg-750x430.png'/>
            
               </ImageContainer>
           
               <p>  ዶናልድ ትራምፕ “በስልጣን ላይ ብሆን ኖሮ የዩክሬን ሩሲያ ጦርነት አይከሰትም ነበር” አሉ </p>
               <br/>
               <p className='p'>  jun 22 2022</p>
              </Card>
              
              <C>
                <SImage>
                 <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img/https://www.fanabc.com/wp-content/uploads/2022/06/Betking_Ethiopian_Premier_League.svg-750x430.png'/>
                </SImage>
                 <T>
                  <p className='main'>በአማራ ክልል በአንድ ጀምበር ከ250 ሚሊየን በላይ ችግኝ ለመትከል መታቀዱ ተገለጸ</p>
                  <p className='sub'>Jun 24, 2022</p>
                </T> 
                </C>

                <C>
                <SImage>
                 <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img/https://www.fanabc.com/wp-content/uploads/2022/06/Betking_Ethiopian_Premier_League.svg-750x430.png'/>
                </SImage>
                 <T>
                  <p className='main'>በአማራ ክልል በአንድ ጀምበር ከ250 ሚሊየን በላይ ችግኝ ለመትከል መታቀዱ ተገለጸ</p>
                  <p className='sub'>Jun 24, 2022</p>
                </T> 
                </C>
                <C>
                <SImage>
                <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img/https://www.fanabc.com/wp-content/uploads/2022/06/Betking_Ethiopian_Premier_League.svg-750x430.png'/>
                </SImage>
                 <T>
                  <p className='main'>በአማራ ክልል በአንድ ጀምበር ከ250 ሚሊየን በላይ ችግኝ ለመትከል መታቀዱ ተገለጸ</p>
                  <p className='sub'>Jun 24, 2022</p>
                </T> 
                </C>
         </R>
         
        </Left>
       <RIght>
        <RightAdd/>
        <MostRead/>
        <AdImage/>
       </RIght>

    </Container>
  )
}

export default Mbody