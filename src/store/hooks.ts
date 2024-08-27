import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';

import { AppDispatch, RootState } from './store.ts';

type DispatchFunction = () => AppDispatch;

// Custom hook that returns the dispatch function to dispatch cart actions
// Has a type DispatchFunction that represents a function that take no arguments but returns data of type AppDispatch
// We have created a type AppDispatch in store.ts -->
// function of type DispatchFunction will return dispatchers of types, that exist in our store
export const useCartDispatch: DispatchFunction = useDispatch;

// Custom hook that returns the cart state
// useSelector is a hook that takes a selector function as an argument
// here we will not change its logic but we chang its type to do it more specific and type-safe
// TypedUseSelectorHook is a generic type that takes a single type argument, which is the type of the whole Redux store state
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector; 