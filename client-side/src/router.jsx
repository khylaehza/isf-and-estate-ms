import { LoginPage, UserRegPage, DistrictRegPage } from "./pages";
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
        children: [
            { path: "/user", element: <UserRegPage /> },
            { path: "/district", element: <DistrictRegPage /> },
        ],
    },
]);

export default router;
