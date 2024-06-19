import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    document.querySelector("body").setAttribute('data-theme', theme)

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        document.querySelector("body").setAttribute('data-theme', theme)
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
