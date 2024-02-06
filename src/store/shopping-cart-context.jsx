import { createContext } from "react";
export const CartContext = createContext({
    item: [],
    addItemToCart: (item) => {},//this is may be not use but it helps auto completion
});