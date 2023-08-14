import React, { createContext, useReducer } from "react";
import { initialState, reducer } from '../Reducer/appReducer';

export const AppContext = createContext();

function AppGlobalState({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
  const contextValue = { dispatch };
  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default AppGlobalState;
