import React from 'react'

function Conditional(props){
    
    if(props.isLoading === true){
       
    return(
        <h1 align="center" className="load">Kindly wait page is loading .....!!!</h1>
        )
    }
    return (
        <h1 align="center" className="loaded">welcome to facebook</h1>
    )
    
}
export default Conditional;
