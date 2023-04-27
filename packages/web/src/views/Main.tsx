import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

interface MainProps {}

const Main: FunctionComponent<MainProps> = () => {
  return (
    <div>
      <Link to="/">
        <img className="App-logo" src={logo} alt="Family History Logo" />
      </Link>
    </div>
  );
};

export default Main;
