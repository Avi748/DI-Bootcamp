import TodoList from './features/TodoList';
import Users from './features/users/Users';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList/>
        <Users/>
      </header>
    </div>
  );
}

export default App;
