import { createBrowserRouter } from "react-router-dom";
import Login from "./login.js";
import Browse from './Browse.js';
import { RouterProvider } from "react-router-dom";
import React, { createContext } from "react";

// Removed the redeclaration of DataContext
const DataContext = createContext(null);

function Body({ userData }) {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ]);

    return (
        <div>
            {/* Use DataContext.Provider to provide the context value */}
            <DataContext.Provider value={userData}>
                <RouterProvider router={appRouter} />
            </DataContext.Provider>
        </div>
    );
}

export default Body;
export { DataContext };
