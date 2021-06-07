import React from 'react'
import './Todo-list-item.css'

export default class TodoListItem extends React.Component{
    render( ){
        const { label, onDeleted, onToggleDone, onToggleImportant,id, important, done} = this.props;
        let classNames = 'todo-list-item';
     
     
       
        if(done){
            classNames += " done"
        }
    
        if(important){
            classNames+= ' important'
        }
        return(
        <span className={classNames} >
            <span className="todo-list-item-label" onClick={(id)=>{
                onToggleDone(id)
            }}>
                 {label}
            </span>
            <button type="button" className="btn btn-outline-success btn-sm btn-red"
               onClick={onDeleted} >
                <i className="fa fa-exclamation" /> 
            </button>
            <button type="button" className="btn btn-outline-success btn-sm btn-green"
            onClick={()=>{
                onToggleImportant(id)
            }}>
                <i className="fa fa-trash-o" />
            </button>
           
        </span>     
       );
    }
}


//export default TodoListItem