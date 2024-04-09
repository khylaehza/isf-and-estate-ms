import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useData } from "../DataContext";
import { SideNav } from "../layout";
import { HomePage } from "../pages";
import { useEffect } from "react";
import axiosClient from "../axiosClient";
const AdminPages = () => {
    const { user, token, setToken, setUser } = useData();
    const location = useLocation();
    if (!token) {
        return <Navigate to={"/login"} />;
    }
    useEffect(() => {
        axiosClient.get("/profile").then(({ data }) => {
            setUser(data);
        });
    }, []);

    return (
        <>
            {user && (
                <SideNav
                    user={user}
                    setUser={setUser}
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
