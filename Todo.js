function ToDo({todo, todos, setTodos}){
    const todoDelete = event => {
        var number = Number(event.target.id);
        todos.splice(number,1);
        setTodos(todos);
    }

    return <div className="todo" onClick={todoDelete}>{todo.value} -</div> 
}