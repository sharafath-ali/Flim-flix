export const initialState ={   
     favorites: [],
};
export const reducer=(state, {type,payload}) =>{
    switch (type) {
        case 'add':
        return  {...state,favorites:[...state.favorites,payload]};
    }
};
