/* import logo from './assets/images/logo.png'; */
import './styles/style.css';
import TaskList from './components/TaskList';
import logo from "./assets/images/logo.png"


function App() {
  return (
    <div className="App">
      <header>
        {/* <div className="app-bg-header" /> */}
        <img className="app-logo" src={logo} alt="logo" />
      </header>
      <main>
        <h1>Task List</h1>
        <TaskList />        
      </main>
      <footer>
        <div className="bg-footer-1"/>      

      </footer>
      <div className="bg-footer-2"/>
    </div>
  );
}

export default App;
