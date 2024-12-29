import { useContext } from "react";
import { authContext } from "../components/AuthProvider";


const Blog = () => {
    const { registerUser } = useContext(authContext);
    

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        console.log(name, photo, email, password, confirmPassword);
        registerUser(email, password)
        
        
    }



    return (
        <div className="w-2/3 mx-auto min-w-[500px] rounded-xl border-2 border-red-500 p-5">
            <form action="" onSubmit={handleRegister}>
                <div className="my-2">
                    <p className="my-1">Name</p>
                    <input
                        name="name"
                        type="text"
                        placeholder="Type your name"
                        required
                        className="input input-bordered input-info w-full " />
                </div>
                <div className="my-2">
                    <p className="my-1">Photo</p>
                    <input
                        name="photo"
                        type="text"
                        placeholder="Type here"
                        // required
                        className="input input-bordered input-info w-full " />
                </div>
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
                <div className="my-2">
                    <p className="my-1">Confirm password</p>
                    <input
                        name="confirmPassword"
                        type="password"
                        placeholder="Retype password"
                        required
                        className="input input-bordered input-info w-full " />
                </div>
                <button type="submit" className="btn btn-primary w-full my-3"> Register</button>


            </form>

        </div>
    );
};

export default Blog;