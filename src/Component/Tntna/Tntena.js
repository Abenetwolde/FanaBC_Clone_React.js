
import React from 'react'
import styled from 'styled-components'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
const Container=styled.div`
padding: 10px;;
gap:20px;
background-color:#EDEDED ;
display:flex; ;
@media (max-width:768px){
    display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap:25px;
align-items:center ;
margin-left:20px;
margin-right:20px;




}
`;
const Left=styled.div`
height:350px ;
flex:0.35;

@media (max-width:768px){
    height:250px ;
    width:100% ;
    margin-bottom:50px;
    img{
        width:100% ;
    height:100% ; 
   
    }

}
img{
    margin-top:20px; ;
    width:100% ;
    height:100% ;
}
`;
const Title=styled.div`

margin-top:10px ;
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
const Image=styled.div`

height: 100%;
width: 100%;
background-image: url("https://sp-ao.shortpixel.ai/client/q_lossy,ret_img/https://www.fanabc.com/wp-content/uploads/2021/02/%E1%8A%A0%E1%8B%B5%E1%8B%8B-1-569x430.jpg");
background-size:cover;
background-repeat:no-repeat;
transition: all 0.3s ease-in-out;




`;
const LeftImage=styled.div`
overflow:hidden ;
margin-top:20px ;
height:300px; ;
width:250px; ;
position: relative;




/* border-right:2px solid white ; */
transition: all 0.3s ease-in-out;
&:hover {
    ${Image} {
    
      transform:scale(1.2);
    }
  }

  @media (max-width:768px){
    overflow:hidden ;
    align-items:center;
margin-top:20px ;
height:300px; ;
width:350px;; ;
position: relative;

 



}
`;

const Gradient=styled.div`

position:absolute ;
left:0 ;
top:0 ;
width: 100%;
height:100% ;
 background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(5, 0, 0, 0.61)); 
`;
const GradientTop=styled.div`

position:absolute ;
left:0 ;
top:0 ;
width: 100%;
height:100% ;
 background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(5, 0, 0, 0.61)); 
`;
const SmallConatainer=styled.div`

position: absolute;
top:0 ;
left:90px;

height: 18px;
padding:3px ;
background-color:#E80028 ;
p{
    text-align:center ;
    color:white ;
    font-size: 13px;
}
@media (max-width:768px){
    top:0 ;
left:190px;

height: 18px;
padding:3px ;
 



}
`;



const Date=styled.p`

position:absolute ;
bottom:20px ;
left:20px ;
font-size: 15px;
font-weight:700;
color:whitesmoke ;
`;

const Right=styled.div`
flex:0.65;
display:flex ;
flex-direction:column;

`;
const RghtWrap=styled.div`

display:flex ;

gap:5px;
@media (max-width:768px){
    display:grid ;
    grid-template-columns: repeat(1, 1fr);

   



}
`;


function Tntena() {
  return (
   <Container>
     <Left>
     <Title>
        <Red></Red>
        <PlayCircleFilledIcon className='i'/>
        <p>  ማስታወቂያ</p>
        <Divider></Divider>    
    </Title>
        <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img/https://www.fanabc.com/wp-content/uploads/2019/10/tele.jpg'/>
     </Left>

    <Right>
    <Title>
        <Red></Red>
        <PlayCircleFilledIcon className='i'/>
        <p>  ትንታኔናአስተያየት</p>
        <Divider></Divider>    
    </Title>
        <RghtWrap> <LeftImage>
        <Image></Image>
        <Gradient></Gradient>
        <SmallConatainer>
            <p>የሀገር ውስጥ ዜና</p>
        </SmallConatainer>

       <Date>አሸባሪው ሸኔን ጨምሮ በሌሎች ህገ-ወጥ ኃይሎች ላይ የሚወሰደው ህግ የማስከበር እርምጃ ተጠናክሮ ይቀጥላል – የኦሮሚያ እና አማራ ክልል ርዕሳነ መስተዳድሮች</Date>
        </LeftImage>
        <LeftImage>
        <Image></Image>
        <Gradient></Gradient>
        <SmallConatainer>
            <p>የሀገር ውስጥ ዜና</p>
        </SmallConatainer>

       <Date>Jአሸባሪው ሸኔን ጨምሮ በሌሎች ህገ-ወጥ ኃይሎች ላይ የሚወሰደው ህግ የማስከበር እርምጃ ተጠናክሮ ይቀጥላል – የኦሮሚያ እና አማራ ክልል ርዕሳነ መስተዳድሮች</Date>
        </LeftImage>
        <LeftImage>
        <Image></Image>
        <Gradient></Gradient>
        <SmallConatainer>
            <p>የሀገር ውስጥ ዜና</p>
        </SmallConatainer>
       
       <Date>አሸባሪው ሸኔን ጨምሮ በሌሎች ህገ-ወጥ ኃይሎች ላይ የሚወሰደው ህግ የማስከበር እርምጃ ተጠናክሮ ይቀጥላል – የኦሮሚያ እና አማራ ክልል ርዕሳነ መስተዳድሮች</Date>
        </LeftImage>
        <LeftImage>
        <Image></Image>
        <Gradient></Gradient>
        <SmallConatainer>
            <p>የሀገር ውስጥ ዜና</p>
        </SmallConatainer>
       
       <Date>አሸባሪው ሸኔን ጨምሮ በሌሎች ህገ-ወጥ ኃይሎች ላይ የሚወሰደው ህግ የማስከበር እርምጃ ተጠናክሮ ይቀጥላል – የኦሮሚያ እና አማራ ክልል ርዕሳነ መስተዳድሮች</Date>
        </LeftImage>
        </RghtWrap>
        </Right>
   </Container>
  )
}

export default Tntena