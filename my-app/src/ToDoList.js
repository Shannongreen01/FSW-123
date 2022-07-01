import Todo from './Todo';

// Gets prop of the default state array.
function ToDoList({toDoList, comp, del}) {

    return (  
        // Filters the toDoList for the individual item. Passes as prop the new single items to Todo.js. Passing complete/delete function too. 
        // Sets key to id of that individual task.
        //! Only way I could figure out how to render multiple Todo components for now. 
        <>
            <h1>To do list:</h1>
            {toDoList.map((todo) => {
                return( <Todo key = {todo.id} todo = {todo} comp = {comp} del = {del}/>)
            })}
        </>
    );
};

export default ToDoList;

