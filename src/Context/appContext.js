import { createContext ,useReducer} from "react";
// import {initialState, Reducer} from '../Reducer/appReducer';
export const appContext=createContext();




const appContextWrapper=({children})=>{
  
// const [state, dispatch] = useReducer(Reducer, initialState);
// const contextValue = {state, dispatch};
  <appContext.Provider>
     {/* value={contextValue}> */}
    {children}
  </appContext.Provider>
};

export default appContextWrapper