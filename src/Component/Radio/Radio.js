import React from 'react'
import styled from 'styled-components';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
const Container=styled.div`
margin-top:30px;
padding:10px ;
display:flex ;
flex-direction:column ;

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
const ImageGrid=styled.div`
padding:30px; ;
padding-right:50px;
margin-top:20px; ;
background-color:#EDEDED;
display:grid ;
grid-template-columns: repeat(5, 1fr);

gap:40px;
@media (max-width:768px){
  padding:10px; ;
  padding-right:50px;
  display:grid ;
grid-template-columns: repeat(3, 1fr);

gap:10px;



}
`;
function Radio() {
  return (
    <Container>
      <Title>
        <Red></Red>
        <PlayCircleFilledIcon className='i'/>
        <p>   ፋናሬዲዩ</p>
        <Divider></Divider>  
        </Title>
        <ImageGrid>
            <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img,w_150/https://www.fanabc.com/wp-content/uploads/2021/04/90-minedited-150x150.jpg'/>
            <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img,w_150/https://www.fanabc.com/wp-content/uploads/2021/04/120-%E1%8B%B0%E1%89%82%E1%89%83edited-150x150.png'/>
            <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img,w_150/https://www.fanabc.com/wp-content/uploads/2021/04/%E1%8B%9C%E1%8A%93-%E1%8B%AB%E1%8B%B5%E1%88%9D%E1%8C%A1edited-150x150.png'/>
            <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img,w_150/https://www.fanabc.com/wp-content/uploads/2021/04/%E1%8B%9C%E1%8A%93-%E1%8B%AB%E1%8B%B5%E1%88%9D%E1%8C%A1edited-150x150.png'/>
            <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img,w_150/https://www.fanabc.com/wp-content/uploads/2021/04/%E1%88%98%E1%8B%9D%E1%8A%93%E1%8A%9Bedited-150x150.jpg'/>
            <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img,w_150/https://www.fanabc.com/wp-content/uploads/2021/04/%E1%8B%A8%E1%88%AB%E1%8B%B2%E1%8B%AE-%E1%8C%89%E1%89%A5%E1%8A%9D%E1%89%B5edited-150x150.png'/>
            <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img,w_150/https://www.fanabc.com/wp-content/uploads/2021/04/Sportedited-150x150.png'/>
            <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img,w_150/https://www.fanabc.com/wp-content/uploads/2021/04/%E1%89%B6%E1%8A%AD-%E1%88%BE%E1%8B%8Dedited-150x150.png'/>
            <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img,w_150/https://www.fanabc.com/wp-content/uploads/2021/04/%E1%88%85%E1%8C%8D%E1%8A%93-%E1%8D%8D%E1%89%B5%E1%88%85edited-150x150.png'/>
            
        </ImageGrid>  
   
    </Container>
  )
}

export default Radio