import { useDispatch } from 'react-redux';

import { AppDispatch } from './store.ts';

type DispatchFunction = () => AppDispatch;

// Custom hook that returns the dispatch function to dispatch cart actions
// Has a type DispatchFunction that represents a function that take no arguments but returns data of type AppDispatch
// We have created a type AppDispatch in store.ts -->
// function of type DispatchFunction will return dispatchers of types, that exist in our store
export const useCartDispatch: DispatchFunction = useDispatch;