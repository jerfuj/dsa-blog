import { Fragment } from 'react';

import Navbar from './nav/Navbar';

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
    </Fragment>
  )
}

export default Layout
