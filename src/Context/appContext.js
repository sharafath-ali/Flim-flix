import { createContext ,useReducer} from "react";
import { initialState,reducer} from '../Reducer/appReducer';

export const AppContext=createContext();

const AppContextWrapper=({children})=>{
  
 const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = { state, dispatch };
 return(<AppContext.Provider value={contextValue}>
    {children}
  </AppContext.Provider>)
};

export default AppContextWrapper;