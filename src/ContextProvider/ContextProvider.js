import React, { createContext, useEffect, useState } from 'react';

export const eSocityContext = createContext();

const ContextProvider = ({ children }) => {

    const [darkOn, setDarkOn] = useState(JSON.parse(localStorage.getItem('mode')));

    useEffect(() => {
        const mode = JSON.parse(localStorage.getItem('mode')) || false;
        if (darkOn !== mode) {
            localStorage.setItem('mode', darkOn);
            setDarkOn(JSON.parse(localStorage.getItem('mode')));
        }

    }, [darkOn])

    const values = { setDarkOn, darkOn }
    return (
        <eSocityContext.Provider value={values}>
            {children}
        </eSocityContext.Provider>
    );
};

export default ContextProvider;