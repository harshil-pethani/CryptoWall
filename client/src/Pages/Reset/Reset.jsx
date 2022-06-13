import axios from 'axios';
import { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './reset.scss';
import 'react-toastify/dist/ReactToastify.css';
import { loginImage, resetTokenVerify } from '../../Config/api';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Reset = () => {
    const [resetPassword, setResetPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [tokenVerified, setTokenVerified] = useState(false);
    const [tokenErrorMsg, setTokenErrorMsg] = useState("");

    const location = useLocation();


    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get("reset_password_token");
        console.log(token);

        const checkToken = async (token) => {
            const res = await axios.post(resetTokenVerify, { token });
            if (res.data.success === true) {
                setTokenVerified(true);
            } else {
                setTokenVerified(false);
                setTokenErrorMsg(res.data.message);
                toast.error(res.data.message, {
                    position: "top-center"
                })
            }
        }
        checkToken(token);
    }, []);

    const handleResetPassword = async (e) => {
        e.preventDefault();

        // try {
        //     const { data } = await axios.post(forgotUser, { email });
        //     if (data.success === true) {
        //         // console.log(data);
        //         toast.success(data.message, {
        //             position: "top-center"
        //         });
        //     } else {
        //         toast.error(data.message, {
        //             position: "top-center"
        //         })
        //     }
        // } catch (e) {
        //     toast.error("Something went wrong", {
        //         position: "top-center"
        //     })
        //     console.log(e);
        // }
    }

    return (
        <div className="forgotPage">
            <Navbar />
            {
                tokenVerified ?
                    (
                        <div className="mainContainer">
                            <div className="loginleft">
                                <img src={loginImage} alt="" />
                            </div>
                            <div className="loginright">
                                <h1 className="title">
                                    Reset Password
                                </h1>
                                <p>
                                    Enter Your New Password
                                </p>
                                <form action="">
                                    <div className="formItem">
                                        <label htmlFor="resetPassword">
                                            Password
                                        </label>
                                        <br />
                                        <input id="resetPassword" type="password" placeholder="New Password" onChange={(e) => setResetPassword(e.target.value)} />
                                    </div>
                                    <div className="formItem">
                                        <label htmlFor="retypePassword">
                                            ReType Password
                                        </label>
                                        <br />
                                        <input id="retypePassword" type="password" placeholder="ReType New Password" onChange={(e) => setRetypePassword(e.target.value)} />
                                    </div>
                                    <button onClick={(e) => handleResetPassword(e)}>
                                        Change Password
                                    </button>
                                </form>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className="mainContainer" style={{ justifyContent: "center", height: "300px" }}>
                            <h3>
                                {tokenErrorMsg}
                            </h3>
                        </div>
                    )
            }
            <Footer />
            <ToastContainer />
        </div>
    )
}

export default Reset