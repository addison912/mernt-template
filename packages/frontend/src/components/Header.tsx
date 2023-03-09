import { Link } from 'react-router-dom';
import { FunctionComponent } from 'react';
import NavDropdown from './NavDropdown';
import logo from '../../public/assets/images/logo.svg';

type GoogleUser = {
  email: string;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
};

interface IProps {
  user: GoogleUser | null;
  signOut: () => void;
}

const Header: FunctionComponent<IProps> = ({ user, signOut }) => {
  return (
    <header>
      <Link className="col_3" to="/">
        <img className="logo" src={logo} alt="Family History logo" />
      </Link>
      <NavDropdown user={user} signOut={signOut} />
    </header>
  );
};

export default Header;
