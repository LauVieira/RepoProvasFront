import React, { createContext, useState } from 'react';

const PageContext = createContext();
export default PageContext;

export function PageContextProvider (props) {
    const [ pageAim, setPageAim ] = useState('');

    return (
        <PageContext.Provider value = {{ pageAim, setPageAim }}>
            {props.children}
        </PageContext.Provider>
    );
}