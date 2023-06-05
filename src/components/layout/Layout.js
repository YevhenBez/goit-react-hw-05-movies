import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './css/layout.module.css';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.ul}>
            <li>
              <NavLink to="/" className={css.navLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={css.navLink}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
