import { GET_MOVIES, REMOVE_ITEM, ADD_CART ,GET_MOVIESPARAM } from './action';

const initialState = {
    movie: [],
    cart: [],
    number: 0,
    movieParam:[]
}

function movieReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return { ...state, movie: action.payload }

       case GET_MOVIESPARAM:
       // console.log(action.payload ,"payload")
                    return { ...state, movieParam: action.payload }

        case ADD_CART:
            console.log(initialState.cart, "initialState.cart")
            return { ...state, cart: [...state.cart, action.payload] }

        case REMOVE_ITEM:
            console.log('REMOVE_REDUCER', action.payload.id, state.cart);
            return {
                ...state,
                cart: state.cart.filter((item) => action.payload.id !== item.id)
            }

        default:
            return state;
    }
}
export default movieReducer;