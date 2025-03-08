import React, { useEffect, useState } from 'react'
import { hasValidationError, validationError } from '../../helpers/Frontend'
import { API_BASE_URL_SERVER } from '../../config/Commen';
import Loading from '../../components/Loading/Loading';
import { useCommen } from '../../contextapi/commenContext/commenContext';
import { Inputvalidate } from '../../helpers/inputValidate';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginWithGoogle from './socialLogin/GoogleLogin';
import { useGoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import LoginWithGithub from './socialLogin/LoginWithGithub';
import axios from 'axios';
import Alerts from '../../components/Loading/Alerts';

function Login() {
    const [errors, setErrors] = useState([]);
    const [post, setPost] = useState({ email: "", password: "" })
    const [passShow, setPassShow] = useState(false)
    const [submitting, setIsSubmitting] = useState(false);
    const [alertShow, setalertShow] = useState(false);
    const [ResMessage, setResMessage] = useState("");
    const [ResMessageErr, setResMessageErr] = useState("");
    const { apiLoginRequest, errorMes, isLoading,setIsLoading, resData } = useCommen()

    const onChange = (e) => {
        const { name, value } = e.target
        setPost((prevState) => ({ ...prevState, [name]: value }));
    }
    const inputNameArray = ["email", "password"]
    const onSubmit = (e) => {
        e.preventDefault();
        if (submitting) { return; }
        if (!Inputvalidate(inputNameArray, post, setErrors)) { return; }
        handleSubmitdoc(e);
    }
    const data = JSON.stringify(post)
    const handleSubmitdoc = async () => {
        setalertShow(true)
        setIsLoading(true)
        const config = {
            method: "post",
            url: `${API_BASE_URL_SERVER}/signin`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: post
        }
        await axios.request(config).then((res) => {
            // console.log(res);
            if (res.status == 200) {
                setIsLoading(false)
                setResMessage(res?.data?.message)
                sessionStorage.setItem("user", res?.data.user)
                sessionStorage.setItem("email", post?.email)
                setTimeout(() => {
                    window.location = "/chat-now"
                }, 3000);
            }
        }).catch((err) => {
            console.log(err);
            setIsLoading(false)
            if (err.response?.data?.message) {
                setResMessageErr(err.response.data.message)
            } else {
                setResMessageErr(err.message)
            }
        })
    }
    useEffect(() => {
        if (errorMes && isLoading == false) { toast.error(errorMes.message) }
        if (resData && isLoading == false) {
            setResMessage(resData?.data?.message)
            setTimeout(() => {
                window.location = "/chat-now"
            }, 3000);
        }
        console.log( isLoading);
    }, [errorMes, isLoading])


    return (
        <div className="login-tab">
            {/* {isLoading && <Loading />} */}
            <form className='login-form' onSubmit={onSubmit} >
                <div className="login-main alert alert-pro  my-3">
                    <div className="form-group">
                        <div className="logo-wrap form-control-wrap">
                            <div>
                                <img className="logo-dark logo-img" src="./images/logo-dark.png"
                                    srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
                            </div>
                        </div>
                        <div className="form-control-wrap">
                            <div className="form-text">
                                <label className="form-text-label pt-2" id="">Email</label>
                                <input type="text" placeholder='Enter your Email Address' name="email" htmlFor="custominput" value={post?.email} className="form-text-input" id="" onChange={onChange} style={hasValidationError(errors, "email") ? { border: "1px solid red" } : {}} />
                                {hasValidationError(errors, "email") ? (<span className="has-cust-error-white">{validationError(errors, "email")}</span>) : null}
                            </div>
                        </div>
                        <div className="form-control-wrap">
                            <div className="form-text">
                                <label className="form-text-label pt-2" id="">Password</label>
                                <input type={passShow ? "text" : "password"} placeholder='Enter your Password ' name="password" htmlFor="custominput" value={post?.password} className="form-text-input" id="" onChange={onChange} style={hasValidationError(errors, "password") ? { border: "1px solid red" } : {}} />
                                <span onClick={() => setPassShow(!passShow)} className='eys-icon'><em className={`icon ni ${passShow ? "ni-eye-fill" : "ni-eye-off-fill"}`}></em></span>
                                {hasValidationError(errors, "password") ? (<span className="has-cust-error-white">{validationError(errors, "password")}</span>) : null}
                            </div>
                        </div>
                        <div className="form-control-wrap">
                            <div className="forgot-password ">
                                <label className=" d-flex gap-1 align-center" id="">
                                    <input type="checkbox" name="checkbox" id="" onChange={onChange} style={hasValidationError(errors, "password") ? { border: "1px solid red" } : {}} />
                                    Remember me
                                </label>
                                <NavLink to='/forgot-password' className=''>Forgot Password !</NavLink>
                            </div>
                        </div>
                        {
                            alertShow &&
                            <>
                                {  
                                   isLoading ? 
                                   <Alerts title={"Processing"} messagetype={"loading"} setalertShow={setalertShow} /> :
                                    ResMessage ?
                                        <Alerts title={ResMessage} messagetype={"success"} setalertShow={setalertShow} /> :
                                        ResMessageErr ?
                                            <Alerts title={ResMessageErr} messagetype={"error"} setalertShow={setalertShow} /> : ""
                                }

                            </>
                        }

                        <div className="d-flex align-center justify-center form-control-wrap">
                            <button className='justify-center w-full btn btn-dim btn-orangelight my-3'
                                //  onClick={()=> window.location = "/chat-now"} 
                                type='submit' disabled={isLoading}> Sign In</button>
                        </div>
                        <p className='create-new-account'>Don't have an account !  {"  "}<NavLink to='/register'>Register Now</NavLink> </p>
                        <div className="form-control-wrap">
                            <div className="forgot-password ">
                                <button type='button' style={{ justifyContent: "center", width: "100%" }} className='social-logins' htmlFor="customFile">
                                    Login With Google
                                    <em class="icon ni ni-google"></em>
                                    <div id="customFile" className="socialLoginbtn">
                                        <LoginWithGoogle setalertShow={setalertShow} setResMessage={setResMessage} setResMessageErr={setResMessageErr} />
                                    </div>
                                </button>
                                {/* <div className='social-logins'  htmlFor="customFile">
                                    Login With GitHub
                                    <em class="icon ni ni-github-round"></em>
                                    <div id="customFile" className="socialLoginbtn">
                                    <LoginWithGithub/>
                                    </div>
                                    </div> */}
                            </div>
                        </div>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default Login