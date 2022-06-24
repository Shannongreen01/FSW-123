


function ToDoList({todoItems}) {

    const todoList = todoItems.map((todo, index) => <li key = {index}>{todo.text}</li>)

    return (   
        <h1>
            <ul>{todoList}</ul>
        </h1>
    );
}

export default ToDoList;
