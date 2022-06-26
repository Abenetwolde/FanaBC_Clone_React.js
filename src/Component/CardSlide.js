import React, { Component } from "react";
import Slider from "react-slick";


import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container,  } from '@mui/system';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import styled from 'styled-components';
const ContainerWrapper=styled.div`

  margin-top:5px ;
  margin-left:5px;
/*   background-color:red ; */

  display: flex;
  
  gap:5px;
 
  
  
 

`;
const Icons=styled.div`


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

  z-index:auto 
  ;
height:100px ;


position: relativ
 



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
  margin:10px; ;
  padding:10px; ;

 
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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}



export default class CustomArrows extends Component {
     
      
  render() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    
    };
    return (
     <div>
            <Title>
        <Red></Red>
     
        <p>  ቢዝነስ</p>
        <Divider></Divider>
        
    </Title>
        <Slider {...settings}>
        
              <Card>
               <ImageContainer>
              
                <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img/https://www.fanabc.com/wp-content/uploads/2021/10/%E1%8A%A2%E1%88%AC%E1%89%BB-750x430.jpg'/>
            
               </ImageContainer>
           
               <p>  ኔቶ ዓለምን በተፅዕኖው ስር ለመክተት የሚያደርገውን </p>
               <br/>
               <p className='p'>  jun 22 2022</p>
              </Card>
              <Card>
               <ImageContainer>
              
                <img src='https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/288226180_402702398554906_20548329287905365_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=UNQ5KbbGd6YAX_u4rsD&_nc_ht=scontent.fadd1-1.fna&oh=00_AT_KYqDNNR-FR3rN2GZZqbhbmbUSQuReCYUh2StUyKlHQg&oe=62BA6B82'/>
            
               </ImageContainer>
           
               <p>  ኔቶ ዓለምን በተፅዕኖው ስር ለመክተት የሚያደርገውን </p>
               <br/>
               <p className='p'>  jun 22 2022</p>
              </Card>
              <Card>
               <ImageContainer>
               
                <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img/https://www.fanabc.com/wp-content/uploads/2022/03/photo_2022-03-02_15-30-35-750x430.jpg'/>
            
               </ImageContainer>
           
               <p>  ኔቶ ዓለምን በተፅዕኖው ስር ለመክተት የሚያደርገውን </p>
               <br/>
               <p className='p'>  jun 22 2022</p>
              </Card>
              <Card>
               <ImageContainer>
               
                <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img/https://www.fanabc.com/wp-content/uploads/2022/06/1-12-750x430.jpg'/>
            
               </ImageContainer>
           
               <p>  ኔቶ ዓለምን በተፅዕኖው ስር ለመክተት የሚያደርገውን </p>
               <br/>
               <p className='p'>  jun 22 2022</p>
              </Card>
              <Card>
               <ImageContainer>
               
                <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img/https://www.fanabc.com/wp-content/uploads/2022/06/sl-750x430.jpg'/>
            
               </ImageContainer>
           
               <p>  ኔቶ ዓለምን በተፅዕኖው ስር ለመክተት የሚያደርገውን </p>
               <br/>
               <p className='p'>  jun 22 2022</p>
              </Card>
             
             
            

        </Slider>
        </div>
     
    );
  }
}