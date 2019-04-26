

import React from 'react';


function TodoItem(props)
{   
    return(
<div >
<span>
<input type="checkbox" checked={props.todo.completed}/>
<label className="pl-2" name="1"><b>{props.todo.text}</b></label>
</span>
</div>
    )
}

export default TodoItem;