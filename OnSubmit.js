function Onsubmit({addTodo}){
    const [input, setInput] = React.useState('');

    const todoSubmit = e => {
        e.preventDefault();
        console.log(e.target.input);
        if (!input) return;
        addTodo(input);
        setInput('');
    };

    return (
        <form onSubmit={todoSubmit}>
        <input
            type="text"
            value={input}
            className="input"
            placeholder="Add a new task here..."
            onChange={(e)=> setInput(e.target.value)}
        />
    </form>
    )
}