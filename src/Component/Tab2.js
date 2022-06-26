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



    function Tab2(props) {
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
                <img src='https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/289414037_424945846311535_7055642683368019568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_-IY3yD957AAX_kHIua&tn=bFSfHoLPsfEw5zQg&_nc_ht=scontent.fadd1-1.fna&oh=00_AT9ehjODCBYujIOtjQU2VUvph86fgCtS_emXDYze1vvavg&oe=62BC9A80'/>
            
               </ImageContainer>
           
               <p>  ኢትዮጵያ በሰላምና ልማት መስኮች ከዓለም አቀፉ ማኅበረሰብ ጋር በመተባበርና በመተማመን ላይ ተመሥርታ ትሰራለች‼- የአገር መከላከያ ሚኒስቴር </p>
               <br/>
               <p className='p'>  jun 22 2022</p>
              </Card>
              <Card>
               <ImageContainer>
               <Icons><PlayCircleFilledWhiteOutlinedIcon className='i'/></Icons>
                <img src='https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/289104751_424883146317805_4600762480091578784_n.jpg?stp=dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1xlkNYnj8MYAX-S3T2f&_nc_ht=scontent.fadd1-1.fna&oh=00_AT_CWXNdH933pm31LD-4BgmrnhqLk3gPX5isKiaK3IiZcQ&oe=62BDDE39'/>
            
               </ImageContainer>
           
               <p>  ኔቶ ዓለምን በተፅዕኖው ስር ለመክተት የሚያደርገውን </p>
               <br/>
               <p className='p'>  jun 22 2022</p>
              </Card>
              <Card>
               <ImageContainer>
               <Icons><PlayCircleFilledWhiteOutlinedIcon className='i'/></Icons>
                <img src='https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/288491255_424801496325970_2904053944619487418_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=uCOYLZqKTHgAX_pZhE3&tn=bFSfHoLPsfEw5zQg&_nc_ht=scontent.fadd1-1.fna&oh=00_AT-vxXugNVRpEb95GWYdVZiPuB14uOz1rYRYpHOSdqcCrQ&oe=62BCFBFC'/>
            
               </ImageContainer>
           
               <p> ከቆቃ ኃይል ማምንጫ ጣቢያ ወደ ሞጆ የኤሌክትሪክ ማከፋፈያ ጣቢያ በተዘረጋው 132 ኪሎ ቮልት ከፍተኛ ማስተላለፊያ መስመር ላይ በተፈጸመ ስርቆት ምክንያት በአከባቢው የኤሌክትሪክ አቅርቦት ተቋርጧል፡፡  </p>
               <br/>
               <p className='p'>  jun 22 2022</p>
              </Card>
              <Card>
               <ImageContainer>
               <Icons><PlayCircleFilledWhiteOutlinedIcon className='i'/></Icons>
                <img src='https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/289097254_424556966350423_8881582993127496539_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5B0vkiDQ1-wAX9RZUKW&_nc_ht=scontent.fadd1-1.fna&oh=00_AT-52mD0La-VqZQXU4So_LaPmSMXISUx6FzOr0n-s3xw1w&oe=62BCC45A'/>
            
               </ImageContainer>
           
               <p>  በስመጨረሻ አሜሪካ የዩክሬን ሩሲያ ጦርነት በማንኛውም ዲፕሎማሲያዊ መንገድ እንዲፈታ አግዛለሁ አለች </p>
               <br/>
               <p className='p'>  jun 22 2022</p>
              </Card>
              <Card>
               <ImageContainer>
               <Icons><PlayCircleFilledWhiteOutlinedIcon className='i'/></Icons>
                <img src='https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/288809462_424799482992838_9067718445386825735_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ivdF1sdlhiUAX9-XIN9&_nc_ht=scontent.fadd1-1.fna&oh=00_AT-JI6Xe82HoECdtT9ua1vVZUn4qSGDcu3puhZuc0FjCyg&oe=62BE0F2B'/>
            
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


export default Tab2