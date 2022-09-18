/* import logo from './assets/images/logo.png'; */
import './styles/style.css';
import TaskList from './components/TaskList';
import logo from "./assets/images/logo.png"


function App() {
  return (
    <div className="App">
      <header>
        <img className="app-logo" src={logo} alt="logo" />
      </header>
      <main>
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
