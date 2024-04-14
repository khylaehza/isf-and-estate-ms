import { Navigate } from "react-router-dom";
import { useData } from "../DataContext";

const HomePage = () => {
    const { token } = useData();

    if (token == null) {
        return <Navigate to={"/login"} />;
    }
    return <div>home</div>;
};

export default HomePage;
