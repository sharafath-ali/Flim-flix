import React,{useContext} from 'react'
import { AppContext } from '../Context/AppGlobalState'

function Favorites() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div>{state?.Favorites?.map((E)=>{return E.title})}</div>
  )
}

export default Favorites