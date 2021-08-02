import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

interface accountsProps {
  description: string;
  value: number;
  date: string;
}

interface GlobalState {
  accounts: Array<accountsProps>;
  earnings: number;
  spending: number;
  total: number;
}

const initialState: GlobalState = {
  accounts: [],
  earnings: 0,
  spending: 0,
  total: 0,
};

export const GlobalContext = createContext();

export const GlobalProvider: React.FC = ({ children }) => {
  const [globalState, globalDispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ globalState, globalDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
