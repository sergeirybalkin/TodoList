import React from 'react';
import './todo-list-item.css'


const TodoListItem = ({label,important = false}) => {
    const style ={
        color:important? 'tomato': 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
        <span style={style} className='todo-list-item'>
            <span>
            {label}
            </span>

 <button type="button" className="btn btn-outline-success btn-sm float-right">
     <i className="fa fa-exclamation"></i>

 </button><button type="button" className="btn btn-outline-danger btn-sm float-right  ">
     <i className="fa  fa-trash-o"></i>
 </button>

</span>

    )
};

export default TodoListItem;