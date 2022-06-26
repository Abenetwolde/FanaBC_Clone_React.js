import React from 'react'
import { useState,useCallback,useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./text.scss"
const names = [
    'ከፈረንጆቹ 1979 ወዲህ በስፔን የኮሌራ በሽታ ለመጀመሪያ ጊዜ ተከሰተ', 'የደቡብ ምዕራብ ኢትዮጵያ ህዝቦች ክልል የኢንቨስትመንት አማራጮችን የማስተዋወቅና የገቢ ማሰባሰቢያ መርሐ-ግብር እያካሄደ ነው', ' የደቡብ ምዕራብ ኢትዮጵያ ህዝቦች ክልል የኢንቨስትመንት አማራጮችን የማስተዋወቅና የገቢ ማሰባሰቢያ መርሐ-ግብር እያካሄደ ነውሕንድና ኢትዮጵያ የሁለትዮሽ ግንኙነታቸውን ማጠናከር በሚችሉበት አግባብ ላይ ተወያዩ'
]
function Text() {
    const [newName, setnewName] = useState("");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 3000);
        return () => clearInterval(intervalID);
    }, [shuffle])
  return (
    <div className='textconatiner'> <p className='p1'>በብዛት የተነበቡ</p>
   <ArrowForwardIosIcon className='i'/>
    <p className='p'>{newName}</p>
    </div>
  )
}

export default Text