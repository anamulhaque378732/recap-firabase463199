import { useContext } from "react";
import { authContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";


const ProtectedRoute = ({ children }) => {

    const { user } = useContext(authContext);
    const location = useLocation();
    // console.log(location);

    if (user) {
        return children;
    } else {
        return <Navigate to={"/register"} state={location.pathname}></Navigate >;
    };
};

export default ProtectedRoute;