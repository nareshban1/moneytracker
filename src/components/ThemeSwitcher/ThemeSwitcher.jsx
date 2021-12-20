import { CheckBox, Slider, Switch } from "./ThemeSwitcherStyles";

import { useContext } from "react";
import { ThemeContext } from "../../context/themeProvider";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Switch>
      <CheckBox
        type="checkbox"
        checked={theme === "dark" ? true : false}
        onClick={toggleTheme}
      />
      <Slider />
    </Switch>
  );
};

export default ThemeSwitcher;
