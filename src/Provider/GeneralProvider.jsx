import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

// general context
export const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("class", theme);
  }, [theme]);

  const toggleTheme = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const generalData = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <GeneralContext.Provider value={generalData}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;

GeneralProvider.propTypes = {
  children: PropTypes.node,
};
