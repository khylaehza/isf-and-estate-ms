import { LoginPage, UserRegPage } from "./pages";
import { createBrowserRouter } from "react-router-dom";
import { AdminPages } from "./default";
const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: <AdminPages />,
        children: [{ path: "/register", element: <UserRegPage /> }],
    },
]);

export default router;
