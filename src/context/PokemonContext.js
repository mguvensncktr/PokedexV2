import React, { createContext, useContext, useEffect, useState } from 'react';


const PokemonContext = createContext();


export const usePokemonContext = () => useContext(PokemonContext);

const PokemonContextProvider = ({ children }) => {


    return (
        <PokemonContext.Provider value={{}}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonContextProvider;