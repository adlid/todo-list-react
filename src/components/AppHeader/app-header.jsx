


const AppHeader=({todo, done})=>{
    return(
      <div>
          <h1>
              My Todo List
          </h1>
          <h2>
             {todo} more to do {done} done
          </h2>
      </div>
     
  )
  }
  export default AppHeader