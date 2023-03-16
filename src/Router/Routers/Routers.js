import Editor from "../../Home/Editor/Editor";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../Home/Home/Home");
const { default: Main } = require("../../Layout/Main");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/editor',
                element: <Editor></Editor>
            }
        ]
    }
])