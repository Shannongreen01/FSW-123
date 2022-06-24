import ToDoList from './ToDoList';
import { todo } from './Store';

function App() {
  return (
      <ToDoList todoItems = {todo}/>
  );
}

export default App;
