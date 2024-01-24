import { createContext } from "react";

// its like an central global object, we can access it from anywhere at component
const ThemeContext = createContext({
    isDarkTheme: false,
    bgDark: 'bg-black text-white',
    bgWhite: 'bg-white text-black',
})
export default ThemeContext;