import {
    LoginPage,
    UserRegPage,
    DistrictRegPage,
    EstateRegPage,
    ISFRegPage,
    AwardeeRegPage,
    ActivityLogsPage,
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
            { path: "/isf/:name", element: <ISFRegPage /> },
            { path: "/estate/:name", element: <AwardeeRegPage /> },
            { path: "/logs", element: <ActivityLogsPage /> },
        ],
    },
]);

export default router;
