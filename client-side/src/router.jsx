import {
    LoginPage,
    UserRegPage,
    DistrictRegPage,
    EstateRegPage,
} from "./pages";
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
            { path: "/estate", element: <EstateRegPage /> },
        ],
    },
]);

export default router;
