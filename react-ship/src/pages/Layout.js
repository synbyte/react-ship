
import '../App.css';
import '../tw.css';
import { Outlet, Link } from 'react-router-dom';
import { Navbar } from 'flowbite-react';


function Layout() {
  return (
    <>
      <Navbar>
        <ul>
          <li>
            <Link className="text-3xl" to="/">Home</Link>
          </li>
          <li>
            <Link className="text-xl" to="additem">Add Item</Link>
          </li>
        </ul>
      </Navbar>

      <Outlet/>
    </>
  );
}

export default Layout;
