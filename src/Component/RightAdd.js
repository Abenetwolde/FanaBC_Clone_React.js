
import React from 'react'
import styled from 'styled-components';
import "./Rightadd.scss";
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
const Container= styled.div`

display:flex ;
flex-direction:column ;
p{
    margin-top:10px;
    font-weight:600 ;
    font-size:13px;
}
`;
const ImageButto=styled.div`
margin-top:10px;
height:60px;
width :200px ;
img{
    height:100% ;
    box-sizing:cover;
}
`;
const Card=styled.div`
overflow:visible ;
margin-top:50px;
padding:10px ;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
position: relative;
display: flex; ;
flex-direction:column;
p{
   font-size:20px;
    font-weight:700;
    text-align:center ;
    padding-left:20px;
    padding-right:20px;
    padding-top:60px;
}
.p{
    font-size:15px;
    font-weight:500;
    color: #AFA0A9;
    text-align:center ;
    padding-left:15px;
    padding-right:15px;
    padding-top:10px;  
}
.pp{
    padding-top:5px;
    font-size:12px; ;
    color :grey;
}
`;
const RotateImage=styled.div`
height:70px ;
width:70px ;
position:absolute ;
top:-17px; ;
left:140px;
transform: rotate(325deg);
img{
    height:100% ;
    box-sizing:cover ;
}
`;
const Icons =styled.div`
margin-top:20px;
display: flex;
gap:10px;
align-items:center ;
justify-content:center ;
.icon{
    color:grey!important;
}
`;
function RightAdd() {
  return (
<Container>
    
<p>ፋና መልቲሚዲያ የተባለ የአንድሮይድ መተግበርያችን ከ ጎግል ፕሌይ ስቶር ያውርዱ</p>
<ImageButto>
<img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img,w_226,h_57/https://www.fanabc.com/wp-content/uploads/2021/05/images.png'/>
</ImageButto>
<Card>
<RotateImage>
        <img src='https://sp-ao.shortpixel.ai/client/q_lossy,ret_img/https://www.fanabc.com/wp-content/plugins/newsletter-pack-pro/images/newsletters/envelope-2.png?v=1.2.1'/>
    </RotateImage>
<p>ትኩስ መረጃዎች በፍጥነት እንዲደርስዎ ይመዝገቡ</p>
<p className='p'>Sign up here to get the latest news, updates and special offers delivered directly to your inbox.</p>

<div class="news__form">
         <input type="email" placeholder="Enter your email address" />
         <button class="news__btn">Subscribe</button>
</div>
<p className='pp'>You can unsubscribe at any time</p>
<Icons>
    <FacebookOutlinedIcon className='icon'/>
    <TwitterIcon className='icon'/>
    <GoogleIcon className='icon'/>
    <YouTubeIcon className='icon'/>
 </Icons>
</Card>
    </Container>
  )
}

export default RightAdd