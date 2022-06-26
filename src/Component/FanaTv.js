import React from 'react'
import styled from 'styled-components'
import TvIcon from '@mui/icons-material/Tv';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabPanel from './Tab';
import Text from './Text';
import Tab2 from './Tab2';

const Container=styled.div`
overflow:hidden ;
margin-top:20px ;
margin-left:50px ;
margin-right:50px;
height: 55vh;
margin-bottom:10px;
background-color:#E8E8E8 ;
display:flex ;
flex-direction: column ;

@media (max-width:768px){
  height: max-content;
gap:20px;
margin-top:20px ;
margin-left:20px ;
margin-right:20px;
overflow:hidden ;
}
`;
const Title=styled.div`
p{
    font-size:20px;
    font-weight:700 ;
}



background-color:#DFDFDF;
display:flex ;
align-items:center ;
justify-content:space-between ;
gap:3px;
height:50px ;
`;
const Left=styled.div`
flex:0.6;
display:flex;
align-items:center ;
gap:5px;
`;
const Tabss=styled.div`

`;
const Right=styled.div`

flex:0.4;

`;
const Bar=styled.div`
height:50px ;
width:8px ;
background-color:red;

`;

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
function FanaTv() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Container>
    <Title>
       <Left> <Bar></Bar><TvIcon/><p> ፋና ቴሌቪዥን</p></Left>
    
<Right>
  <Box sx={{ /* width: '100%' */ }}>
         
      <Box sx={{ /* borderBottom: 1, borderColor: 'divider'  */}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="ፋና ቀለማት" {...a11yProps(0)} />
          <Tab label="ፋና 90" {...a11yProps(1)} />
          <Tab label="የዜና ቪዲዮዎች" {...a11yProps(2)} />
          <Tab label=" ዙሪያ መለስ" {...a11yProps(3)} />
          <Tab label="ቢዝነስ " {...a11yProps(4)} />
        </Tabs>
      </Box>
    
      
    </Box>
    </Right>
    </Title>
  
    <TabPanel value={value} index={0}>
  
      </TabPanel>
      <Tab2 value={value} index={1}></Tab2>
      {/* <TabPanel value={value} index={1}>
        Item Two
      </TabPanel> */}
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      
    </Container>
  )
}

export default FanaTv