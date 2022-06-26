
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import styled from 'styled-components'
const Container=styled.div`
padding:20px;
background-color:#1A1A1A;
display:grid ;
grid-template-columns:repeat(3,1fr) ;

gap:40px;
@media (max-width:768px){
    display:grid ;
grid-template-columns:repeat(1,1fr) ;

gap:40px;

 



}
`;
const Title=styled.div`
 display: flex;
  gap:5px;
align-items:center ;
width:100% ;

p{
    color:white;
    font-size:20px ;
    font-weight:500;
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

const Item1=styled.div`
display:flex;
flex-direction:column ;
align-items:center;
justify-content:center ;
gap:10px;
.i{
    font-size:40px!important;
    color:white !important;
}
p{
    color:white;
    text-align:center ;
    font-size:13px;
}
img{
    margin-top:10px;
   box-sizing:contain;
  
   height:150px ;
   width:200px ;
}
`;
const Item2= styled.div`
display:flex ;
flex-direction:column ;
gap:10px;
p{
    color:red;
    font-size:25px ;
    font-weight:700 ;
    text-align:center ;
}
`;
const L= styled.div`
display:flex ;
align-items:center;
gap:10px;
margin-top:10px; ;
justify-content:space-evenly ;
.t{
    color:white;
    font-size:15px ;
    font-weight:500 ;
    text-align:center 

}
.number{
    color:white;
    font-size:10px ;
    font-weight:500 ;
    text-align:center ;
    padding:5px;
    background-color:grey;
}

`;
const Item3=styled.div`
display:flex; ;
align-items:center ;
justify-content:center ;
height:200px; 
img{
    height:100% ;
}
`;
const CopyWrite=styled.div`
padding:30px;
background-color:#101010;p{
    color:grey ;
    font-size:15px; ;
}
`;

function Fotter() {
  return (
    <div>
  <Container>
   <Item1>
   <Title>
        <Red></Red>
       
        <p>  በብዛትየተነበቡ</p>
        <Divider></Divider>
        
    </Title>
    <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img/https://www.fanabc.com/wp-content/uploads/2021/04/FBC-LOGO.png'/>
    <p>ተቋማችን ፋና ብሮድካስቲንግ ኮርፖሬት በ1987 ዓመተ ምህረት ሲቋቋም በኃላ ቀር መሳሪያዎችና በጥቂት የሰው ሃይል በሀገራችን የብሮድካስት ሚዲያ አዲስ አቀራረብ ይዞ ወደ ስራ ገባ። በሂደትም አደረጃጀቱንና የፕሮግራም ይዘቱን እያሻሻለና ችግሮቹን እየቀረፈ ገስጋሴዉን ቀጠለ።

</p>
<p>ተጨማሪ ያንብቡ</p>
<FacebookIcon className='i'/>
   </Item1>
   <Item2>
   <p className=''>ተነባቢ አምዶች</p>
   <Divider></Divider>
  
    <L><p className='t'>የሀገር ውስጥ ዜና</p> <p className='number'>20079</p></L>
    <L><p className='t'>የሀገር ውስጥ ዜና</p> <p className='number'>20079</p></L>
    <L><p className='t'>የሀገር ውስጥ ዜና</p> <p className='number'>20079</p></L>
    <L><p className='t'>የሀገር ውስጥ ዜና</p> <p className='number'>20079</p></L>
    
   
   </Item2>
   <Item3>
    <img src='https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/285452264_5247313622026001_5777315560615246680_n.png?stp=dst-png_p160x160&_nc_cat=103&ccb=1-7&_nc_sid=dd9801&_nc_ohc=gb7ClPFt_EAAX-LqjzJ&_nc_ht=scontent.fadd1-1.fna&oh=00_AT-JhL0PVBw9RDErmLQcCzVjzYpgMZ6NepANAHqxG1ey5w&oe=62BD0113'/>
   </Item3>
  </Container>
  <CopyWrite>
  <p>© 2022 - Welcome to Fana Broadcasting Corporate S.C. All Rights Reserved.</p>
  </CopyWrite>
  </div>
  )
}

export default Fotter