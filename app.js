import React, { useState } from "react";
import ToDoScreen from "./Screens/ToDoScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddTask from "./components/AddTask";

const router = createBrowserRouter([
    {
        path: "/", // Homepage
        element: <ToDoScreen />,
        errorElement: <h1>404 - Not Found</h1> // Improved error message
    }, 

    {
    path:"/add-task",
    element: <AddTask/>
    }
]);

const App = () => {
    const [tasks, setTasks] =  useState([]);;
    // return<ToDoScreen/>
    return <RouterProvider router={router} />;
};

export default App;
