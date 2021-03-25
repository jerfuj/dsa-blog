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
      <div onClick={dropdownCtx.closeDropdown}>
        <Link href="/">
          <a>
            <h1>DSA Blog</h1>
          </a>
        </Link>
      </div>
      <Search />
      <CategoryDropdown />
    </header>
  );
};

export default Navbar;