/* import logo from './assets/images/logo.png'; */
import './styles/style.css';
import TaskList from './components/TaskList';


function App() {
  return (
    <div className="App">
      <header>
        {/* <div className="app-bg-header" /> */}
        <img className="app-logo" src='../src/assets/images/logo.png' alt="logo" />
      </header>
      <main>
        <h1>Task List</h1>
        <TaskList />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
