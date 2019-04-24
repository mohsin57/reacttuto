

import React from 'react';


function TodoList()
{
    return(
<div className="enter-list" >
<input  className="inp"type="textbox" placeholder="enter-list"></input><br/>
<span className="btn btn-primary btn-sm mx-2" > Submit</span>
<br/>
<span>

<input type="checkbox" name="1"></input>
<label className="pl-2" name="1"><b>Meeting with client</b></label>

</span>
<br/>
<span>

<input type="checkbox" name="2"></input>
<label className="pl-2" name="2"><b>Milestone discussion</b></label>

</span>
<br/>
<span>

<input type="checkbox" name="3"></input>
<label className="pl-2" name="3"><b>Interview with developer</b></label>

</span>
<br/>
<span>

<input type="checkbox" name="4"></input>
<label className="pl-2" name="4"><b>Gaming on 5th floor</b></label>

</span>


</div>
    )
}

export default TodoList;