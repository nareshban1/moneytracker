import React from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { HeaderContainer, Logo } from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Money Tracker</Logo>
      <ThemeSwitcher />
    </HeaderContainer>
  );
};

export default Header;
