

import React from 'react';
import TodoItem from './TodoItem';
import todosData from './TodoData';



class MainContent extends React.Component{
    constructor(){
        super()
        this.state = {
            todos : todosData

        }
        this.handlerchange = this.handlerchange.bind(this)
    }
    handlerchange(id)
    {
        this.setState (prevState => {
            const updatedtodos= prevState.todos.map(todo => {
                if(todo.id === id){

                    todo.completed = !todo.completed;
                    
                }
                return todo
                
            }  
            )
            return {
                todos: updatedtodos
            }
        })

       
    }
    

    
    render(){
        const todoItems = this.state.todos.map(item => <TodoItem todo={item} handlerchange={this.handlerchange}/>  )

        return( 
        <div className="enter-list">
            <div className="cnt">
                <input  className="inp"type="textbox" placeholder="enter-list"></input>
                <button className="btn btn-primary btn-sm mx-2">Submit</button><br/><br/>

    <br/>
            {todoItems}
        </div>
    </div>
        )
    }

   
}

export default MainContent;