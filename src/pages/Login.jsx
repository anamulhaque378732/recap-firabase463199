import { useContext } from "react";
import { authContext } from "../components/AuthProvider";


const Login = () => {
    const { loginUser } = useContext(authContext);
 

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        loginUser(email, password)
    }

    return (
        <div className="w-2/3 mx-auto min-w-[500px] rounded-xl border-2 border-red-500 p-5">
            <form action="" onSubmit={handleLogin}>


                <div className="my-2">
                    <p className="my-1">Email</p>
                    <input
                        name="email"
                        type="email"
                        placeholder="Type here"
                        required
                        className="input input-bordered input-info w-full " />
                </div>
                <div className="my-2">
                    <p className="my-1">Password</p>
                    <input
                        name="password"
                        type="password"
                        placeholder="Type password"
                        required
                        className="input input-bordered input-info w-full " />
                </div>

                <button type="submit" className="btn btn-primary w-full my-3"> Login</button>


            </form>
        </div>
    );
};

export default Login;