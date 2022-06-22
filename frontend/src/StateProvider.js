import React, { createContext, useContext, useReducer, useState } from "react";
//Preparing the data layer
export const StateContext = createContext();
//wrap our components
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);