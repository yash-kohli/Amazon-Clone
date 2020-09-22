import React, { createContext, useContext, useReducer } from "react";

// Prepares the DataLayer
export const DataLayerContext = createContext();

// Wrap the app and provide access to every element of app
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

// To pull information from the data layer
export const useDataLayerValue = () => useContext(DataLayerContext);
