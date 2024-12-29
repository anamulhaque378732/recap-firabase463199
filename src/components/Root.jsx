import { Outlet } from "react-router";
import Header from "./Header";

const Root = () => {
    return (
        <div className="w-4/5 mx-auto">
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default Root;