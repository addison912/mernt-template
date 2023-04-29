import { FunctionComponent } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout: FunctionComponent = () => {
  return (
    <>
      <Navbar
        user={null}
        signOut={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <Outlet />
    </>
  );
};

export default Layout;
