import { configureStore } from '@reduxjs/toolkit';

import { cartSlice } from './cart-slice.ts';

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});

// A cusstom type that represents custom hook that returns the dispatch function from hooks.ts

//const name = 'Joe';
//type customType = typeof name; // -> it has type 'Joe'
// type AppDispatch -> which types of actions can be dispatched
export type AppDispatch = typeof store.dispatch;

// type RootState -> which types of states are in the store
// ReturnType is a utility type that extracts the return type of a function type
export type RootState = ReturnType<typeof store.getState>;  
