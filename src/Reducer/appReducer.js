export const initialState = {
    favorites: [],
    Page: 1,
};
export const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'add':
            return { ...state, favorites: [...state.favorites, payload] };
        case 'remove':
            return { ...state, favorites: state.favorites.filter((e) => e.id !== payload) };
        case 'next_page':
            return { ...state, Page: state.Page + 1 }
        case 'prev_page':
            return { ...state, Page: state.Page - 1 }
        default:
            return state;
    }
};
