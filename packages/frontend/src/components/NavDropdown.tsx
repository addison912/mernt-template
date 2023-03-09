import { useRef } from 'react';
import NavDropdownItem from './NavDropdownItem';
import { useDetectOutsideClick } from './useDetectOutsideClick';
import ExpandIcon from './icons/ExpandIcon';
import SignOutIcon from './icons/SignOutIcon';
import { IGoogleUser } from '@family-history/types';

interface IProps {
  user: IGoogleUser | null;
  signOut: () => void;
}

const NavDropdown = (props: IProps) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const handleSignoutClick = () => {
    props.signOut();
    setIsActive(false);
  };

  const navDropdownItems = [{ name: 'Sign Out', icon: <SignOutIcon />, action: handleSignoutClick }];

  return (
    <div>
      {props.user ? (
        <button className="userMenu" style={{ backgroundImage: `url(${props.user.picture})` }} onClick={() => setIsActive(!isActive)}>
          <div className="userMenu_overlay">
            <ExpandIcon />
          </div>
        </button>
      ) : null}
      <nav ref={dropdownRef} className={`navDropdown${isActive ? ' navDropdown_visible' : ''}`}>
        <ul>
          {navDropdownItems.map((item, i) => (
            <NavDropdownItem item={item} key={i} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavDropdown;
