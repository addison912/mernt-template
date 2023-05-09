import React from 'react';

interface IProps {
  item: { name: string; icon?: React.ReactNode | null; action: () => void };
}

const NavDropdownItem: React.FC<IProps> = ({ item }) => {
  const { name, icon, action } = { ...item };

  return (
    <li className="navDropdownItem">
      <button className="dropDownMenuButton" onClick={action}>
        <div className="col_2 menu-icon">{icon ? icon : null}</div>
        <span className="col_10 dropdownItemName">{name}</span>
      </button>
    </li>
  );
};

export default NavDropdownItem;
