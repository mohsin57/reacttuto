import React from 'react';

class Dmas extends React.Component{
    constructor(){
        super()
            this.state = {
                count : 0
            } 
            this.AddClick=this.AddClick.bind(this);

            this.MultiplyClick=this.MultiplyClick.bind(this);

            this.SubstractClick=this.SubstractClick.bind(this);

            this.DivideClick=this.DivideClick.bind(this);

            this.DefaultZero=this.DefaultZero.bind(this);
        }
        AddClick(){
            this.setState(prevState =>{
                return{
                    count : prevState.count + 1
                }
            })
        }
        MultiplyClick(){
            this.setState(prevState =>{

                return{
                    count : prevState.count * 2
                }
            }
                
                ) 
        }
        SubstractClick()
        {
            this.setState(prevState => {
                return{
                    count : prevState.count - 2
                }
            })
        }
        DivideClick()
        {
            this.setState(prevState => {
                return{
                    count : prevState.count / 2
                }
            })
        }

        DefaultZero()
        {
            this.setState({count : 0})
        }
        render() {
            return(
                <nav className="navbar navbar-light bg-primary">
              
                <div className="container-fluid" align="center">
                    <h1>{this.state.count}</h1><br/>
                    <button className="btn btn-danger mx-2" style={{width:"150px"}} onClick={this.AddClick}>change!</button><br/><br/>
                    <button className="btn btn-danger mx-2" style={{width:"150px"}} onClick={this.MultiplyClick}>MultiplyClick!</button><br/><br/>
                    <button className="btn btn-danger mx-2" style={{width:"150px"}} onClick={this.SubstractClick}>SubstractClick!</button><br/><br/>
                    <button className="btn btn-danger mx-2" style={{width:"150px"}} onClick={this.DivideClick}>DivideClick!</button><br/><br/>
                    <button className="btn btn-danger mx-2" style={{width:"150px"}} onClick={this.DefaultZero}>DefaultZero!</button><br/><br/>
                    </div>
                    </nav>
            )
        }
}
export default Dmas;
    
