import { useState, useContext } from 'react';
import DropdownContext from '../../../context/DropdownContext';

import Link from 'next/link';

import CategoryDropdown from './CategoryDropdown';

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
      <div className={styles.search}>
        <input type="text" placeholder="search" className={styles.input} />
        <button type="button" className={styles.btn}>Search</button>
      </div>
      <CategoryDropdown />
    </header>
  );
};

export default Navbar;