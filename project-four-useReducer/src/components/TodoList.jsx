import { useReducer } from "react"


const TYPES = {
  add: 'add',
  delete: 'delete'
}

const reducer = (state, action) => {
  switch(action.type){
    case TYPES.add:
      return [
        ...state,
        {id: Date.now(), name: action.payload }]
    case TYPES.delete:
      return state.filter(todo => todo.id !== action.payload)
    default:
      return state
  }
}

const initialTodos = [
  {id: 1, name: "Estudiar HTML"},
  {id: 2, name: "Estudiar CSS"},
  {id: 3, name: "Estudiar JavaScript"}
]

export const TodoList = () => {
  
  const [todos, dispatch] = useReducer(reducer, initialTodos)

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch({
      type: TYPES.add,
      payload: event.target[0].value
    })
  }
  console.log(todos);

  const handleDelete = (id) => {
    dispatch({
      type: TYPES.delete,
      payload: id
    })
  }

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="New Todo" />
            <input 
              type="submit" 
              value="Create Todo" 
            />
        </form>
        <div className="todos-container">
          {todos.map(todo => (
            <div className="todo" key={todo.id}>
              <p>{todo.name}</p>
              <button onClick={()=>handleDelete(todo.id)} className="btn-delete" >Delete</button>
            </div>
          ))}
        </div>
    </div>
  )
}