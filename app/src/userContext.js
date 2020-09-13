
import React from 'react';
const userContext = React.createContext({
    user: {},
    authenticated: false,
});

export {
    userContext
};