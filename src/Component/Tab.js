import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container,  } from '@mui/system';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import styled from 'styled-components';
const ContainerWrapper=styled.div`
  height:100%;
  margin-top:5px ;
  margin-left:5px;
/*   background-color:red ; */

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap:5px;
  @media (max-width:768px){

    grid-template-columns: repeat(1, 1fr);
  gap:5px;
}
  
  
 

`;
const Icons=styled.div`

position:absolute ;
top:15px;
right:5px ;
align-items:center ;
transition: all 0.3s ease-in-out;
@media (max-width:768px){
  height:300px ;

}
.i{
  font-size:50px!important;
  color:white!important ;
  background-color:#344D49 ;
  border-radius:100%;
}
`;

const ImageContainer=styled.div`
  z-index:auto ;
height:200px ;
position: relative;
@media (max-width:768px){
  height:300px ;

}
img{

  height:100%;
  width:100% ;
  box-sizing:cover;
}
&:hover{
  ${Icons}{
    transform:scale(1.4);
    top:80px;

right:100px ;

.i{
  background-color:transparent ;
}
@media (max-width:768px){
  transform:scale(1.4);
    top:180px;

right:200px ;

.i{
  background-color:transparent ;
}
  

}

  }
 



}

 

 



`;

/* const PlayCircleFilledWhiteOutlinedIcon=styled.i`
.i{
 

 background-color:blue;
  font-size:35px!important;
  color:white!important ;
 
 
}
`; */




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



    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
  
            {value === index && (
              <ContainerWrapper>
              <Card>
               <ImageContainer>
               <Icons><PlayCircleFilledWhiteOutlinedIcon className='i'/></Icons>
                <img src='https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/289438920_424961602976626_7814871670539164948_n.jpg?stp=dst-jpg_s600x600&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=b-7UGrwM-voAX8Ph5A0&_nc_ht=scontent.fadd1-1.fna&oh=00_AT8N-g92-TzAq6T_ihFTeBWUEyUPJXbjA0CZB2gtH5InIQ&oe=62BD3B9B'/>
            
               </ImageContainer>
           
               <p>  ኢትዮጵያ በሰላምና ልማት መስኮች ከዓለም አቀፉ ማኅበረሰብ ጋር በመተባበርና በመተማመን ላይ ተመሥርታ ትሰራለች‼- የአገር መከላከያ ሚኒስቴር </p>
               <br/>
               <p className='p'>  jun 22 2022</p>
              </Card>
              <Card>
               <ImageContainer>
               <Icons><PlayCircleFilledWhiteOutlinedIcon className='i'/></Icons>
                <img src='https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/290147840_424959049643548_2496976015330188307_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ixScsP_80e4AX_H2eNk&tn=bFSfHoLPsfEw5zQg&_nc_ht=scontent.fadd1-1.fna&oh=00_AT9WqUBNhOQkV-dRJWEoqM6ORLQoVH6Hitlzpa8vm0lBhA&oe=62BC636E'/>
            
               </ImageContainer>
           
               <p>  ኔቶ ዓለምን በተፅዕኖው ስር ለመክተት የሚያደርገውን </p>
               <br/>
               <p className='p'>  jun 22 2022</p>
              </Card>
              <Card>
               <ImageContainer>
               <Icons><PlayCircleFilledWhiteOutlinedIcon className='i'/></Icons>
                <img src='https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/289414037_424945846311535_7055642683368019568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_-IY3yD957AAX_kHIua&tn=bFSfHoLPsfEw5zQg&_nc_ht=scontent.fadd1-1.fna&oh=00_AT9ehjODCBYujIOtjQU2VUvph86fgCtS_emXDYze1vvavg&oe=62BC9A80'/>
            
               </ImageContainer>
           
               <p> ከቆቃ ኃይል ማምንጫ ጣቢያ ወደ ሞጆ የኤሌክትሪክ ማከፋፈያ ጣቢያ በተዘረጋው 132 ኪሎ ቮልት ከፍተኛ ማስተላለፊያ መስመር ላይ በተፈጸመ ስርቆት ምክንያት በአከባቢው የኤሌክትሪክ አቅርቦት ተቋርጧል፡፡  </p>
               <br/>
               <p className='p'>  jun 22 2022</p>
              </Card>
              <Card>
               <ImageContainer>
               <Icons><PlayCircleFilledWhiteOutlinedIcon className='i'/></Icons>
                <img src='https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/289036749_424958032976983_8099834908225957073_n.jpg?stp=dst-jpg_p843x403&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=02om13s8jyUAX_CwYoT&_nc_ht=scontent.fadd1-1.fna&oh=00_AT_Muuwdr4KkZU1W61U9Nv-z2I3To42vmOYASPYaP0khoA&oe=62BD8061'/>
            
               </ImageContainer>
           
               <p>  በስመጨረሻ አሜሪካ የዩክሬን ሩሲያ ጦርነት በማንኛውም ዲፕሎማሲያዊ መንገድ እንዲፈታ አግዛለሁ አለች </p>
               <br/>
               <p className='p'>  jun 22 2022</p>
              </Card>
              <Card>
               <ImageContainer>
               <Icons><PlayCircleFilledWhiteOutlinedIcon className='i'/></Icons>
                <img src='https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/288226180_402702398554906_20548329287905365_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=UNQ5KbbGd6YAX_u4rsD&_nc_ht=scontent.fadd1-1.fna&oh=00_AT_KYqDNNR-FR3rN2GZZqbhbmbUSQuReCYUh2StUyKlHQg&oe=62BA6B82'/>
            
               </ImageContainer>
           
               <p>  ኔቶ ዓለምን በተፅዕኖው ስር ለመክተት የሚያደርገውን </p>
               <br/>
               <p className='p'>  jun 22 2022</p>
              </Card>
             
             
            
              </ContainerWrapper>
            )}
          
          </div>
        );
      }


export default TabPanel