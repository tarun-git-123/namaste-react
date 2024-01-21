# namaste react

# Food ordering APP

* Header
* - Logo
* - Navbar
* Body
*  - Search
*  - RestaurentContainer
*    - RestaurentCard
* Footer
*  - Copyright
*  - Links
*  - Address
*  - Contact

...
#React Hooks
(Normal JS utility function writter by facebook developer)
    - useState()
        =>It is used for creating local state veriable inside our functional component
        => Try to call or initialize useState variable on the top of the functional component.
        =>never use "UseState" Hooks inside a if else condition or loop or function== this can create inconsistancy in your program  
    - useEffects()
        useEffect is call after every render of that componenet.
        []-> this dependency array changes the behavior of its render.
        => if no dependency array => useEffecth called every render
        => if dependency array is empty [] => useEffect is called only initial render (Just once) 
        => if dependency array is [something] => useEffect is called everytime "something" is updated.

#state variable
whenever state variable updated, react triggers reconciliation cycle (re-redners the component)


***** React Router *****
Install : npm instal react router dom
Whenever we have to use react router dom, first need to do the configer.
    first import createBrowserRouter from 'react-router-dom' in the app.js - This createBrowserRouter will create the routing configuration of us. 
    createBrowserRouter will take a list of the path.
    Need to import RouterProvider . this RouterProvider is provide the routing configuration

** Higher order Component (HOC)
** Controller and uncontroller component
** lifting state up

** context API (state managemenet)