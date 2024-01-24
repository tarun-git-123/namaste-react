import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// import About from "./components/About";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import ThemeContext from "./utils/ThemeContext";
const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  const [darkTheme, setDarkTheme] = useState();
  const { isDarkTheme, bgDark, bgWhite } = useContext(ThemeContext);



  useEffect( ()=>{
    isDarkTheme?setDarkTheme(false):setDarkTheme(true);
  },[]);
  return (
    <Provider store={appStore}>
      <ThemeContext.Provider value={{isDarkTheme:darkTheme,setDarkTheme}}>
      <div className={darkTheme? bgWhite: bgDark}>
        <Header />
        <Outlet />
        <Footer/>
      </div>
      </ThemeContext.Provider>
    </Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurentMenu />,
      },
      {
        path : "/cart",
        element : <Cart/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
