/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext } from 'react';
import Link from 'next/link';
import DropdownContext from '../../../context/DropdownContext';
import CategoryDropdown from './CategoryDropdown';
import Search from './Search';

import styles from './Navbar.module.css';

const Navbar = () => {
  const dropdownCtx = useContext(DropdownContext);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div
          className={styles.logoContainer}
          onClick={dropdownCtx.closeDropdown}
        >
          <Link href="/">
            <a>
              <h2>DSA Blog</h2>
            </a>
          </Link>
        </div>
        <Search />
        <div className={styles.menuContainer}>
          <CategoryDropdown />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
