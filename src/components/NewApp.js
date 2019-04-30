import React from 'react';
import Conditional from './Conditional';


class NewApp extends React.Component {

    constructor(){

        super()
        this.state = {
            isLoading : true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState ({
                isLoading : false
            })
        }, 2500)
    }

    render(){
        return(
            <div>
                <br/>
                <Conditional isLoading={this.state.isLoading} />
                <br/>
            </div>
        )
    }
}


export default NewApp;