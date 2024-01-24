import { createSlice } from "@reduxjs/toolkit";
const themeSlice = createSlice({
    name: 'theme',
    initialState :{
        darkThemeStatus : false,
        bgDark: 'bg-black text-white',
        bgWhite: 'bg-white text-black',
    },
    reducers:{
        toggleTheme: (state,action)=>{
            state.darkThemeStatus = action.payload
        }
    }
})
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer