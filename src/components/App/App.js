
import AppHeader from '../AppHeader/app-header' 
import SearhPanel from '../search-panel/Search-item'
import TodoList from '../todo-list/Todo-list'
import ItemStatusFilter from '../item-status-filter/item-status-filter'
import React from 'react'
import ItemAddForm from '../Item-add-form'

//import App from './App';

 class App extends React.Component{
   maxId = 100;
  state = {
  todoData: [
    this.createTodoItem('Drink Coffe'),
    this.createTodoItem('Make awesome Coffe'),
    this.createTodoItem('Have a lunch')
  ],
  term:'',
  filter:'active'
}
createTodoItem(label){
    return{
      label,
      done:false,
      important: false,
      id:this.maxId++
    }
}
  deleteItem = (id)=>{
    this.setState(({todoData})=>{
      const idx = todoData.findIndex(el=>{
       return el.id===id
      })

      const NewArr = [...todoData];
      NewArr.splice(idx, 1);
     return{
       todoData:NewArr
     }
    })
  }
  toggleProperty(arr,id,propName){
    const idx = arr.findIndex(el=>{
      return el.id===id
     })
     const oldItem  = arr[idx]
     const newItem = {...oldItem, [propName]: !oldItem[propName]}
    return [
       ...arr.slice(0,idx),
       newItem,
       ...arr.slice(idx+1)
     ]
  }
 addItem=(text)=>{
    const newItem = this.createTodoItem(text)
    this.setState(({todoData})=>{
      const NewArr = [...todoData, newItem]
      return{
        todoData:NewArr
      }
    })
    
 }
 onToggleImportant=(id)=>{
  this.setState(({todoData})=>{
    return{
      todoData:this.toggleProperty(todoData,id,'important')
    }
})
 }

 onToggleDone=(id)=>{
  this.setState(({todoData})=>{
      return{
        todoData:this.toggleProperty(todoData,id,'done')
      }
  })
 }
 onDone(id){
    this.setState(({todoData})=>{
      const doneCount = todoData.filter((el)=>el.done)
      const newArr = [...todoData, doneCount];
      const filteredArr = doneCount
      return{
        todoData:doneCount
      }

    })
 }
 search(items, term){
   if(term.length===0){
     return items;
   }
  return items.filter((item)=>{
    return item.label.toLowerCase().indexOf(term.toLowerCase())>-1;
  })
 }
 onSearchChange=(term)=>{
  this.setState({term});
 }
 filterItem(items,filter  ){
  switch(filter){
    case 'all':
      return items;
    case 'active':
      return items.filter((el)=>!el.done);
    case 'done':
      return items.filter((el)=>el.done);
    default:
      return items
  }
 }
 onFilterChange=(filter)=>{
  this.setState({filter});
 }
  render(){
    const {todoData,term,filter} =  this.state
    const visibleItems = this.filterItem(this.search(todoData,term),filter) 
    const doneCount2 = todoData.filter((el)=>el.done);
    const doneCount = todoData.filter((el)=>el.done).length;
    console.log(doneCount2)
    const todoCount = todoData.length - doneCount
    return(
      <div>
          <AppHeader todo={todoCount} done={doneCount} />
          <SearhPanel onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter filter={filter}
          onFilterChange = {this.onFilterChange}/>
          <TodoList todos={visibleItems} 
          onDeleted={(id)=>
            this.deleteItem(id)
          }
          onToggleDone={(id)=>{
            this.onToggleDone(id)
          }}
          onToggleImportant={(id)=>{
            this.onToggleImportant(id)
          }}
          />
          <ItemAddForm addItem={(text)=>{
            this.addItem(text)
          }} /> 
        </div>
      )
  }
 
}
export default App