import { createContext ,useState,useReducer} from "react";
import { initialState,reducer} from '../Reducer/appReducer';

export const AppContext=createContext();

const AppContextWrapper=({children})=>{
  const [isFavorite, setIsFavorite] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = {isFavorite ,setIsFavorite };

 return(<AppContext.Provider value={contextValue}>
    {children}
  </AppContext.Provider>)
};

export default AppContextWrapper;