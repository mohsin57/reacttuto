

import React from 'react';
import Img from './images/Image.png';

function Footer()
{
    return(
<div className="footcolors" >

<marquee behavior="scroll" direction="right"><img src={Img} className="footerlogo" /> All Rights Reserved © 2019 Mohsin & Tauseef Pvt Ltd.<img src={Img} className="footerlogo"  /></marquee>


</div>
    )
}

export default Footer;