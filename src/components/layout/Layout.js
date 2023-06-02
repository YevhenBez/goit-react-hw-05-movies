import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './css/layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.ul}>
            <li>
              <NavLink to="/" className={css.navLink}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={css.navLink}>Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
