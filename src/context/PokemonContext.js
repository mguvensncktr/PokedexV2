import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

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