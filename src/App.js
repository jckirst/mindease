import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

import Menu from './components/menu'
import Articles from './components/articles'
import Footer from './components/footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        oi mundo
        <Button color="danger">Danger!</Button>
      </header>
      <Articles></Articles>
      <Footer></Footer>
    </div>
  );
}

export default App;
