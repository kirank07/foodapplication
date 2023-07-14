import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
;
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import About  from "./components/About";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

const Instamart = lazy(()=> import("./components/Instamart"));
const App = () => {
    const [user,setUser] = useState({
        name:"Kiran khade",
        email: "kiran.khade2008@gmail.com"
    });

    useEffect(()=>{
        //API Call and authenticate user and setUser
    },[]);
    return (
        <div className='app'>
            <UserContext.Provider value={{user:user, setUser:setUser}}>
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contactus />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
        ],
        errorElement : <Error />
    },
    
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);