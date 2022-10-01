/* import logo from './assets/images/logo.png'; */
import { SiGithub, SiLinkedin } from 'react-icons/si';
import './styles/style.css';
import TaskList from './components/TaskList';
import logo from "./assets/images/logo.png"
import logoFooter from "./assets/images/logo_footer.png"


function App() {
  return (
    <div className="App">
      <header>
        <div className='container-logo-header'>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <h1 className='title-App'>TASK APP</h1>
      </header>

      <main>
        <TaskList />        
      </main>

      <footer>
        <div className="bg-footer-1">
          <div className='container-logo-footer'>
            <img className="logo-footer" src={logoFooter} alt="logo footer" />
          </div>
          <div className='social-footer'>
            <p className='name-footer'>Created by FH</p>
            <div className='container-social'>
              <a className='github' href={'https://github.com/saveasfabri/task-app'} target="_blank" rel="noopener noreferrer">
                <SiGithub className='icon-gh'/>
              </a>
              <a className='linkedin' href={'https://www.linkedin.com/in/fabricioahang/'} target="_blank" rel="noopener noreferrer">
                <SiLinkedin className='icon-lk'/>
              </a>              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
