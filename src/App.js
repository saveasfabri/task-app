import logo from './assets/images/logo.png';
import './styles/style.css';
import TaskList from './components/TaskList';


function App() {
  return (
    <div className="App">
      <header>
        <div className="App-bg-header"></div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <h1>Lista de Tareas</h1>
        <TaskList />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
