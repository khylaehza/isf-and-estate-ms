import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useData } from "../DataContext";
import { SideNav } from "../layout";
import { HomePage } from "../pages";

const AdminPages = () => {
    const { curUser, token, setToken, setCurUser } = useData();
    const location = useLocation();

    if (!token) {
        return <Navigate to={"/login"} />;
    }

    return (
        <>
            {curUser && (
                <SideNav
                    curUser={curUser}
                    setCurUser={setCurUser}
                    setToken={setToken}
                    children={
                        location.pathname === "/" ? <HomePage /> : <Outlet />
                    }
                />
            )}
        </>
    );
};

export default AdminPages;
