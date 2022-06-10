import React, { Component, createContext } from 'react';
const ThemeContext = createContext()
const ThemeContextProvider = (props) => {
  const [lightTheme, setLihgtTheme] = React.useState(true)

  const ToggleTheme = () => {
    setLihgtTheme(!lightTheme)
  }
  const { children } = props
  return <ThemeContext.Provider value={{ ...lightTheme, ToggleTheme }}>
    {children}
  </ThemeContext.Provider>
}

export default ThemeContextProvider