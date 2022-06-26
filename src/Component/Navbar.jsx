import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState,useRef,useEffect } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MicIcon from '@mui/icons-material/Mic';

import "./Navbar.scss"

import styled from "styled-components";
const Container=styled.div`
display:flex ;
margin-top:20px ;

`;

  function Navbar() {
 
    const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }
    const searchInput = useRef(null);
    var [issearch, setSearch] = useState(true);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [issearch]);
  function handleFocus(){
    setSearch(!issearch)
    searchInput.current.focus();
  }
 
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return   console.log(issearch);;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     <div className='list'>
       <div className='red'>

       </div>
       <div className='t'>
       <CloseIcon/>
       <p>Fana: At a Speed of Life!</p>
       </div>

       <FormControl sx={{ m: 3, width: '35ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Search...</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'Search...'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                 
                  edge="end"
                >
                   <SearchIcon /> 
                </IconButton>
              </InputAdornment>
            }
            label="Search..."
          />
        </FormControl>
        <div className='nlink'>
          <div>
        <p>ዜና</p>
           <div className='d'></div>
          </div>
          <div>
        <p>ኮሮና ቫይረስ</p>
        <div className='d'></div>
          </div>
          <div>
        <p>ቢዝነስ</p>
        <div className='d'></div>
          </div>
          <div>
        <p>ስፖርት</p>
        <div className='d'></div>
          </div>
          <div>
          <div className='rt'> <p>ፋና ራዲዪ</p>< MicIcon /> </div> 
        <div className='d'></div>
          </div>
          <div>
       <div className='rt'> <p>ፋና ቲቪ</p><DesktopWindowsIcon/> </div> 
        <div className='d'></div>
          </div>
          <div>
        <p>ቴክ</p>
        <div className='d'></div>
          </div>
          <div>
        <p>ጤና</p>
        <div className='d'></div>
          </div>
          <div>
       <div className='kuwanka'><p>Qankwa</p><div> <PlayArrowIcon/><p>ቀጥታ</p></div> </div> 
        <div className='d'></div>
          </div>
          <div>
        <p>ስፖርት</p>
        <div className='d'></div>
          </div>
        </div>
        
     </div>
    </Box>
  );

  return (
    <div className={x.join(" ")}>
      <nav className="navigation "  >
   
    <button
      className="hamburger"
      onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}
    >
      {/* icon from Heroicons.com */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="white"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
    <div
      className={
        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
      }
    >
      <div className='navWrapper'>
        { 
   issearch? <div className='left'>
        <ul>
     
     <li class="nav__listitem active" >ቅድመ ገፅ</li>
     <li class="nav__listitem">ዜና</li>
     <li class="nav__listitem">ኮሮና ቫይረስ</li>
     <li class="nav__listitem">ቢዝነስ</li>
     <li class="nav__listitem">ስፖርት</li>
     <li class="nav__listitem"><div className='rt'> <p>ፋና ራዲዪ</p>< MicIcon /> </div> </li>
     <li class="nav__listitem"><div className='rt'> <p>ፋና ቲቪ</p><DesktopWindowsIcon/> </div> </li>
     <li class="nav__listitem">ቴክ</li>
     <li class="nav__listitem">ጤና</li>
     <li class="nav__listitem"><div className='key'> <PlayArrowIcon/><p>ቀጥታ</p></div></li>
     <li class="nav__listitem"><div className='keyy'> <p>Qankwa</p> <KeyboardArrowDownIcon/></div> 
       <ul class="nav__listitemdrop">
         <li>Afan Oromo</li>
         <li>ትግረኛ</li>
         <li>English</li>
         <li>Afar</li>
         <li>Somali</li>
       </ul>
     </li>
     <li class="nav__listitem"><div className='keyy'> <p>ክምችት</p> <KeyboardArrowDownIcon/></div>
       <ul class="nav__listitemdrop">
       <li>April</li>
         <li>March</li>
         <li>May</li>
         <li>Jun</li>
         <li>July</li>
         <li>Aguest</li>
         <li>Septermber</li>
         <li>October</li>
         <li>Novmber</li>
         <li>December</li>
       </ul>
     </li>
  
     </ul>
  </div>
:
<div className='search'>
     <input type="text" className='input'  ref={inputElement} placeholder="Search..."/>
</div> 
        }
       <div className='right'>
       <Button  onClick={handleFocus}>{issearch?<SearchIcon className='seachicon' />:<CloseIcon className='closeicon'/>}</Button>
      
        <div>
      {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon className='menu'/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
       </div>

      </div>
   
        </div>
    </nav>
    </div>
  )
}

export default Navbar