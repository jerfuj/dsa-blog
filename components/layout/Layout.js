import { Fragment } from 'react';

import Navbar from './nav/Navbar';

import { DropdownContextProvider } from '../../context/DropdownContext';

const Layout = (props) => {
  return (
    <Fragment>
      <DropdownContextProvider>
        <Navbar />
      </DropdownContextProvider>
      <main>{props.children}</main>
    </Fragment>
  )
}

export default Layout
