import React from 'react';

const authorisationContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authorisationContext;