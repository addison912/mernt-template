import { Link } from 'react-router-dom';
import './App.css';
import logo from '../public/assets/images/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img className="App-logo" src={logo} alt="Family History Logo" />
        </Link>
      </header>
    </div>
  );
}

export default App;
