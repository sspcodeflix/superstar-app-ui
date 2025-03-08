import React, { useEffect, useState } from 'react'
import { hasValidationError, validationError } from '../../helpers/Frontend'
import { API_BASE_URL_SERVER } from '../../config/Commen';
import Loading from '../../components/Loading/Loading';
import { useCommen } from '../../contextapi/commenContext/commenContext';
import { Inputvalidate } from '../../helpers/inputValidate';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import LoginWithGoogle from './socialLogin/GoogleLogin';
import { useGoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

function ForgotPassword() {
    const [errors, setErrors] = useState([]);
    const [post, setPost] = useState({ email: "", newpassword: "" ,confirmNewpassword:"" })
    const [passShow, setPassShow] = useState(false)
    const [passwordReset, setPasswordReset] = useState(false)
    const [submitting, setIsSubmitting] = useState(false);
    const { apiLoginRequest, errorMes, isLoading, resData } = useCommen()
    const onChange = (e) => {
        const { name, value } = e.target
        setPost((prevState) => ({ ...prevState, [name]: value }));
    }
    const inputNameArray = ["email", "newpassword" ,"confirmNewpassword"]
    const onSubmit = (e) => {
        e.preventDefault();
        if (submitting) { return; }
        if (!Inputvalidate(inputNameArray, post, setErrors)) { return; }
        handleSubmitdoc(e);
    }
    const data = JSON.stringify(post)
    const handleSubmitdoc = async () => {
        const config = {
            method: "post",
            url: `http://localhost:8000/api/v1/user/login/`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        }
        await apiLoginRequest(config)
    }
    useEffect(() => {
        if (errorMes && isLoading == false) { toast.error(errorMes.message) }
        if (resData && isLoading == false) { toast.success("Login Success") }
        console.log(errorMes, isLoading, resData, "<<<<<");
    }, [errorMes, isLoading])


    return (
        <div className="login-tab">
            {isLoading && <Loading />}
            <form className='login-form' onSubmit={onSubmit} >
                <div className="login-main alert alert-pro  my-3">
                    <div className="form-group">
                        <div className="logo-wrap form-control-wrap">
                            <div>
                                <img className="logo-dark logo-img" src="./images/logo-dark.png"
                                    srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
                            </div>
                        </div>
                        {
                            passwordReset ?
                                <>
                                    <div className="form-control-wrap">
                                        <div className="form-text">
                                            <label className="form-text-label pt-2" id="">New Password</label>
                                            <input type={passShow ? "text" : "password"} placeholder='Enter your Password ' name="newpassword" htmlFor="custominput" value={post?.newpassword} className="form-text-input" id="" onChange={onChange} style={hasValidationError(errors, "newpassword") ? { border: "1px solid red" } : {}} />
                                            <span onClick={() => setPassShow(!passShow)} className='eys-icon'><em className={`icon ni ${passShow ? "ni-eye-fill" : "ni-eye-off-fill"}`}></em></span>
                                            {hasValidationError(errors, "newpassword") ? (<span className="has-cust-error-white">{validationError(errors, "newpassword")}</span>) : null}
                                        </div>
                                    </div>
                                    <div className="form-control-wrap">
                                        <div className="form-text">
                                            <label className="form-text-label pt-2" id=""> Confirm New Password</label>
                                            <input type={passShow ? "text" : "confirmNewpassword"} placeholder='Enter your confirmNewPassword ' name="confirmNewpassword" htmlFor="custominput" value={post?.confirmNewpassword} className="form-text-input" id="" onChange={onChange} style={hasValidationError(errors, "confirmNewpassword") ? { border: "1px solid red" } : {}} />
                                            <span onClick={() => setPassShow(!passShow)} className='eys-icon'><em className={`icon ni ${passShow ? "ni-eye-fill" : "ni-eye-off-fill"}`}></em></span>
                                            {hasValidationError(errors, "confirmNewpassword") ? (<span className="has-cust-error-white">{validationError(errors, "confirmNewpassword")}</span>) : null}
                                        </div>
                                    </div>

                                </> :
                                <>
                                    <div className="form-control-wrap">
                                        <div className="form-text">
                                            <label className="form-text-label pt-2" id="">Email</label>
                                            <input type="text" placeholder='Enter your Register Email Address' name="email" htmlFor="custominput" value={post?.email} className="form-text-input" id="" onChange={onChange} style={hasValidationError(errors, "email") ? { border: "1px solid red" } : {}} />
                                            {hasValidationError(errors, "email") ? (<span className="has-cust-error-white">{validationError(errors, "email")}</span>) : null}
                                        </div>
                                    </div>
                                </>
                        }

                        <div className="d-flex align-center justify-center form-control-wrap">
                            <button className='justify-center w-full btn btn-dim btn-orangelight my-3' onClick={() => setPasswordReset(true)} type='submit' disabled={isLoading}>Submit</button>
                        </div>

                    </div>

                </div>

            </form>
        </div>
    )
}

export default ForgotPassword