import PropTypes from 'prop-types';
import Navbar from './nav/Navbar';
import { DropdownContextProvider } from '../../context/DropdownContext';

const Layout = ({ children }) => (
  <>
    <DropdownContextProvider>
      <Navbar />
    </DropdownContextProvider>
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
