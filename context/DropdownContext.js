import { createContext, useState } from 'react';

const DropdownContext = createContext();

export const DropdownContextProvider = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const openDropdown = () => {
    setShowDropdown(true);
  }

  const closeDropdown = () => {
    setShowDropdown(false);
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  const context = {
    showDropdown,
    openDropdown,
    closeDropdown,
    toggleDropdown
  };

  return (
    <DropdownContext.Provider value={context}>
      {props.children}
    </DropdownContext.Provider>
  )
}

export default DropdownContext;