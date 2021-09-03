import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); // Prepares the data layer

export const StateProvider = ({ reducer, initialState, children }) => (
  // Children -> <App />
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);