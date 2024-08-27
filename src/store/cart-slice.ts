import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
// Type PayloadAction is a generic type that takes a single type argument, which is the type of the action payload
// We need to always use this type for actions which have a payload

type Item = {
    id: string;
    title: string;
    price: number;
};

type CartItem = Item & {
    quantity: number;
};

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Item>) {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.items[itemIndex].quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        // The removeFromCart action creator takes just a string as the payload, which is the ID of the item to remove
        removeFromCart(state, action: PayloadAction<string>) {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload);

            if (state.items[itemIndex].quantity === 1) {
                state.items.splice(itemIndex, 1);
            } else {
                state.items[itemIndex].quantity--;
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
