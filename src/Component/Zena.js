import React from 'react'
import styled from "styled-components";
const Zina=styled.div`


@media (max-width:768px){

  gap:20px;

 
}
`;
const ZenaContainer=styled.div`
display:flex ;
margin:20px 50px ;
height:450px ;
overflow: hidden;
gap:2px;
@media (max-width:768px){
  display:flex ;
  flex-direction:column ;
  gap:20px;
 
}


`;
const ZenaWrapper=styled.div`
height:100% ;
width:100%;
position:absolute ;



`;
const Image=styled.div`

height: 100%;
width: 100%;
background-image: url("https://sp-ao.shortpixel.ai/client/q_lossy,ret_img/https://www.fanabc.com/wp-content/uploads/2022/06/289948768_5286836871407009_4206487887683653291_n-750x430.jpg");
background-size:cover;
background-repeat:no-repeat;
transition: all 0.3s ease-in-out;
z-index:-5;



`;
const LeftContainer=styled.div`


`;
const LeftImage=styled.div`
overflow:hidden ;


position: relative;

display:flex ;
flex: 0.5;
@media (max-width:768px){
  flex:1;
}
/* border-right:2px solid white ; */
transition: all 0.3s ease-in-out;
&:hover {
    ${Image} {
    
      transform:scale(1.2);
    }
  }


`;

const Gradient=styled.div`
z-index:-3 ;
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
z-index:1 ;
position: absolute;
top:0 ;
left:0 ;

height: 15px;
padding:3px ;
background-color:#E80028 ;
p{
    color:white ;
    font-size: 10px;
}
`;
const Title=styled.p`
z-index:-2 ;
color: white;
font-size: 20px;
font-weight:700 ;
position:absolute ;
bottom:50px ;
left:20px;
`;
const TitleTop=styled.p`

color: white;
font-size: 13px;
font-weight:700 ;
position:absolute ;
bottom:50px ;
left:20px;
`;
const TitleBottom=styled.p`

color: white;
font-size: 13px;
font-weight:500 ;
position:absolute ;
bottom:10px ;
left:20px;
`;
const Date=styled.p`
z-index:-1 ;
position:absolute ;
bottom:15px ;
left:20px ;
font-size: 10px;
color:whitesmoke ;
`;
const DateTop=styled.p`
position:absolute ;
bottom:15px ;
left:20px ;
font-size: 10px;
color:whitesmoke ;
`;
const Right=styled.div`

display:flex ;
flex:0.5;

@media (max-width:768px){


   
   width:100% ;
 
   

 }

`;
const RightWrapper=styled.div`

display:flex ;
flex-direction: column;
@media (max-width:768px){
  background-color:red ;

     height:500px; ;
   width:100% ;
   display:flex ;
   

 }




`;
const ImageTop=styled.div`
height: 100%;
width: 100%;
background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Abiy_Ahmed_and_Isaias_Afwerki_speaking_in_Eritrea_2019.jpg/220px-Abiy_Ahmed_and_Isaias_Afwerki_speaking_in_Eritrea_2019.jpg");
background-size:cover;
background-repeat:no-repeat;
background-position:center;
transition: all 0.3s ease-in-out;

`;
const Top=styled.div`
overflow:hidden ;
position: relative;
width:50vw ;
flex: 0.5;
height:100% ;



border-bottom:2px solid white ;

&:hover {
    ${ImageTop} {
      transform:scale(1.2);
    }
  }
  @media (max-width:768px){
  background-color:red ;

    
   width:100% ;
 
   

 }
`;

const Bottom=styled.div`

position: relative;
width:50vw ;
flex: 0.5;
height:100% ;
@media (max-width:768px){
  background-color:red ;
flex:0.5;

   width:100% ;
 
   

 }
`;
const BottomWrapper=styled.div`
display:flex ;
align-items:center ;
height:100% ;
@media (max-width:768px){
  

     display: flex;
   width:100% ;
 
   

 }
`;
const LeftWapper=styled.div`
position:relative ;
flex:0.5 ;
height:100% ;
width:100% ;
background-color: red;
border-right: 2px solid white;
`;
const RightBottom=styled.div`
position:relative ;
flex:0.5 ;
height:100% ;
width:100% ;


`;
function Zena() {
  return (
    <Zina>
    <ZenaContainer>
     {/*  <ZenaWrapper> */}
   {/*   <LeftContainer> */}
        <LeftImage>
        <Image></Image>
        <Gradient></Gradient>
        <SmallConatainer>
            <p>የሀገር ውስጥ ዜና</p>
        </SmallConatainer>
        <Title>የሀገር ውስጥ ዜና
        የኢፌዴሪ አየር ኃይል የአብራሪዎች ምረቃ ትርዒት ከፊል ገፅታ</Title>
       <Date>Jun 22 2022</Date>
        </LeftImage>
       {/*  </LeftContainer> */}
        <Right>
            <RightWrapper>
            <Top>
              <ImageTop></ImageTop>
              <GradientTop></GradientTop>
              <SmallConatainer>
            <p>የሀገር ውስጥ ዜና</p>
        </SmallConatainer>
        <TitleTop>የሀገር ውስጥ ዜና
        ኢትዮጵያ በሰላምና ልማት መስኮች ከዓለም አቀፉ ማኅበረሰብ ጋር በመተባበርና በመተማመን ላይ ተመሥርታ ትሰራለች‼- የአገር መከላከያ ሚኒስቴር </TitleTop>
       <DateTop>Jun 22 2022</DateTop>
            </Top>
            <Bottom>
          <BottomWrapper>
            <LeftWapper><ImageTop></ImageTop>
              <GradientTop></GradientTop><TitleBottom>የሀገር ውስጥ ዜና
አሸባሪው ሸኔን ጨምሮ በሌሎች ህገ-ወጥ ኃይሎች ላይ </TitleBottom></LeftWapper>
<RightBottom>
<ImageTop></ImageTop>
              <GradientTop></GradientTop><TitleBottom>የሀገር ውስጥ ዜና
አሸባሪው ሸኔን ጨምሮ በሌሎች ህገ-ወጥ ኃይሎች ላይ </TitleBottom>
</RightBottom>

          </BottomWrapper>
            </Bottom>
            </RightWrapper>
        
        </Right>
       {/*  </ZenaWrapper> */}
    </ZenaContainer>
    </Zina>
  )
}

export default Zena