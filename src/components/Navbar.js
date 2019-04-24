import React from 'react';


function Navbar()
{
return(
  
        
<nav className="navbar navbar-dark bg-dark">
<div className="container-fluid">
<div  className="navbar-header">
<h1 className="navbar-brand"><i>Venturedive</i></h1>
</div>


<div>
<span className="btn btn-success mx-2" > <a href="#" style={{color:"#FFFFFF"}}>Home</a></span>
<span className="btn btn-success mx-2"> <a href="#" style={{color:"#FFFFFF"}}>Acadmics</a></span>
<span className="btn btn-success mx-2"> <a href="#" style={{color:"#FFFFFF"}}>About Us</a></span>
<span className="btn btn-success mx-2"> <a href="#" style={{color:"#FFFFFF"}}>Contact</a></span>
</div>    
   


</div>


</nav>
    
    )
}

export default Navbar;
