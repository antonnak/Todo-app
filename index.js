function App(){
    const [todos, setTodos] = React.useState([
        {
            value: "Clean up trash",
            isActive: false,
        },
        {
            value: "Do laundry",
            isActive: false,
        },
        {
            value: "Walk Buddy",
            isActive: false,
        },
    ]);

    const addTodo = text => {
        const y = [...todos,{value: text, isActive: false}];
        setTodos(y);
    }

    return(
        <div className="app">
            <div className="todo-list">
        {todos.map((todo,i) => <ToDo key={i} id={i} todo={todo} todos={todos} setTodos={setTodos}/>)}
        <Onsubmit addTodo={addTodo}/>
        </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);

