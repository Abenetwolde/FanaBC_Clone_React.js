import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Header.scss';
const Container=styled.div`
display:flex ;
justify-content:space-between ;

width: 100vw;
height:35px ;
background-color:#121212 ;
padding:2px ;
align-items:center ;
padding-left:20px;
padding-right:20px;
@media (max-width:768px){
  display:none ;
}


`;
const Left=styled.div`

align-items:center ;
height:100% ;
background-color:#121212 ;
padding:2px ;
display:flex ;
gap:10px;
p{
    color:grey ;
    font-size:13px ;
    font-weight:600 ;
    &:hover{
        color:white;
    }
}
`;
const P=styled.p`
padding:5px ;
background-color: #E80028;
color:white!important;
border-radius:2px
`;
const Right =styled.div`
display:flex ;
align-item:center;
color:white!important ;
gap:5px;
`;

function Header() {
  return (
    <Container>
     
     <Left>
        <P>WEDNESDAY, JUNE 22, 2022</P>
        <p>ስለ ፋና</p>
        <p>ያግኙን</p>
        <p>Afaan Oromoo</p>
        <p>Tigrigna</p>
        <p>English</p>
        <p>Afar</p>
     </Left>
     <Right>
    <FacebookIcon className='i'/>
    <TwitterIcon className='i'/>
    <YouTubeIcon className='i'/>
     </Right>
    </Container>
  )
}

export default Header