import axios from 'axios';
import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './forgot.scss';
import 'react-toastify/dist/ReactToastify.css';
import { loginImage, loginUser } from '../../Config/api';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(loginUser, userData);
            if (data.success === true) {
                // console.log(data);
                setUser(data);
                toast.success(data.message, {
                    position: "top-center"
                });
                setTimeout(() => {
                    navigate('/');
                    // window.location.reload();
                }, 3000);
            } else {
                toast.error(data.message, {
                    position: "top-center"
                })
            }
        } catch (e) {
            toast.error("Something went wrong", {
                position: "top-center"
            })
            console.log(e);
        }
    }


    return (
        <div className="loginPage">
            <Navbar />
            <div className="mainContainer">
                <div className="loginleft">
                    <img src={loginImage} alt="" />
                </div>
                <div className="loginright">
                    <h1 className="title">
                        Forgot Password
                    </h1>
                    <p>
                        Enter Your Email Id For which You want to Reset Password
                    </p>
                    <form action="">
                        <div className="formItem">
                            <label htmlFor="emailid">
                                Email
                            </label>
                            <br />
                            <input id="emailid" type="email" placeholder="Enter Your Email" onChange={(e) => {
                                setUserData({ ...userData, email: e.target.value });
                            }} />
                        </div>
                        <button onClick={(e) => handleLogin(e)}>
                            Send
                        </button>
                    </form>
                    <NavLink to="/signup">
                        Don't have an Account? <span>Sign up!</span>
                    </NavLink>
                    <NavLink to="/login">
                        Already have an Account? <span>Log In!</span>
                    </NavLink>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </div>
    )
}

export default Login