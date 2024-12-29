import { useContext } from "react";
import { authContext } from "../components/AuthProvider";






const Home = () => {


    const user = useContext(authContext);
    console.log(user);

    return (
        <div>

            <p>This is home</p>

        </div>
    );
};

export default Home;