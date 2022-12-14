import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { userSigninReducer } from "./reducer/userReducer";
import { cartReducer } from "./reducer/cartReducer";
const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    },
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem('cartItems')) : [],
    },

};

const reducer = combineReducers({
    // productList: productListReducer,
    // productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;