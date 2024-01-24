import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import themeReducer from "./themeSlice";

const appStore = configureStore({
    reducer :{
        cart: cartReducer,
        darkTheme : themeReducer
    }
});

export default appStore;