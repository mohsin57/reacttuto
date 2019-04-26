

import React from 'react';
import TodoItem from './TodoItem';
import todosData from './TodoData'


function MainContent(){
const todoItems = todosData.map(item => <TodoItem todo={item}/>)

    return( <div className="enter-list" >
        <div>
            <input  className="inp"type="textbox" placeholder="enter-list"></input><br/><br/>
<span className="btn btn-primary btn-sm mx-2" > Submit</span>
<br/>
        {todoItems}
    </div>
</div>
    )
   
}

export default MainContent;