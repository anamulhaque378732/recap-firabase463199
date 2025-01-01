import { useContext, useEffect, useState } from "react";
import { authContext } from "../components/AuthProvider";
import { useNavigate, useLocation } from "react-router";


const Register = () => {
    const { registerUser, setUser, googleLogin, facebookLogin, user } = useContext(authContext);
    const [error, setError] = useState('');
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();


    //const [firebaseError, setFirebaseError] = useState('');
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        setError('');

        // console.log(name, photo, email, password, confirmPassword);
        if (!/@gmail\.com$/.test(email)) {
            setError("email is not valid, please give me valid email");
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 character');
            return;
        }
        if (password !== confirmPassword) {
            setError("password did't match");
            return
        } if (!/\d{2,}$/.test(password)) {
            setError('password is not valid, password have must ends with at least 2 number');
            return;
        } if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setError("password is not valid, password have must be at least one special character");
            return;
        }



        registerUser(email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => { setError(error.message) });


    };
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                setUser(result.user);

            }).catch(error => {
                console.log(error.message);

            });
    };
    const handleFacebookLogin = () => {
        facebookLogin()
            .then(result => {
                setUser(result.user)
            }).catch(error => {
                console.log(error.message);

            });
    };

    useEffect(() => {
        if (user) {
            navigate(location.state)
        }




    }, [user]);




    return (
        <div className="w-2/3 mx-auto min-w-[500px] rounded-xl border-2 border-red-500 p-5">
            <form action="" onSubmit={handleRegister}>
                <div className="my-2">
                    <p className="my-1">Name</p>
                    <input
                        name="name"
                        type="text"
                        placeholder="Type your name"
                        // required
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
                <button type="submit" className="btn btn-primary w-full text-2xl my-3"> Register</button>


            </form>
            <div className="py-4">
                {
                    error && <p className="text-red-500 font-medium">{error}</p>
                }

            </div>
            <div className="text-center my-3 ">
                <button onClick={handleGoogleLogin} className="btn text-center text-2xl btn-primary font-medium">Google Login</button>
                <button onClick={handleFacebookLogin} className="btn text-center text-2xl ml-4 btn-secondary font-medium">Facebook Login</button>
            </div>



        </div>
    );
};

export default Register;