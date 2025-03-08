import React, { useEffect, useState } from 'react'
import { hasValidationError, validationError } from '../../helpers/Frontend'
import {  API_BASE_URL_SERVER } from '../../config/Commen';
import Loading from '../../components/Loading/Loading';
import { useCommen } from '../../contextapi/commenContext/commenContext';
import { Inputvalidate } from '../../helpers/inputValidate';
import { NavLink } from 'react-router-dom';
import Alerts from '../../components/Loading/Alerts';

function Register() {
    const [errors, setErrors] = useState([]);
    const [post, setPost] = useState({ email: "", first_name: "", last_name: "", password: "", confirm_password: "", mobile_number: "" })
    const [passShow, setPassShow] = useState(false)
    const [submitting, setIsSubmitting] = useState(false);
    const [alertShow, setalertShow] = useState(false);
    const [ResMessage, setResMessage] = useState("");
    const [ResMessageErr, setResMessageErr] = useState("");
    const { apiRequest, errorMes, isLoading,setErrorMes, resData,setresData } = useCommen()
    const onChange = (e) => {
        const { name, value } = e.target
        setPost((prevState) => ({ ...prevState, [name]: value }));
    }
    const inputNameArray = ["email", "first_name", "last_name", "password"]
    const onSubmit = (e) => {
        e.preventDefault();
        if (submitting) { return; }
        if (!Inputvalidate(inputNameArray, post, setErrors)) { return; }
        handleSubmitdoc(e);
    }

    // const data = JSON.stringify(post)
    const handleSubmitdoc = async () => {
        setalertShow(true)
        const config = {
            method: "post",
            url: `${API_BASE_URL_SERVER}/signup`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: post
        }
        await apiRequest(config)
    }
    useEffect(() => {
        if (errorMes && isLoading == false) { 
            if(errorMes.response?.data.message){
                setResMessageErr(errorMes.response.data.message) 
            }else{
                setResMessageErr(errorMes?.message) 
            }
            setErrorMes()
        }
        if (resData?.status == 200 && isLoading == false) {
            setResMessage(resData?.data?.message)
            setErrorMes()
            setresData()
            window.location = "/login"
        }
        // console.log(errorMes, isLoading, resData, "<<<<<");
    }, [errorMes, isLoading])
    return (
        <>
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
                            <div className="form-row form-control-wrap">
                                <div className="form-text">
                                    <label className="form-text-label pt-2" id="">First Name</label>
                                    <input type="text" placeholder='Enter your First Name' name="first_name" htmlFor="custominput" value={post?.first_name} className="form-text-input" id="" onChange={onChange} style={hasValidationError(errors, "first_name") ? { border: "1px solid red" } : {}} />
                                    {hasValidationError(errors, "first_name") ? (<span className="has-cust-error-white">{validationError(errors, "first_name")}</span>) : null}
                                </div>
                                <div className="form-text">
                                    <label className="form-text-label pt-2" id="">Last Name</label>
                                    <input type="text" placeholder='Enter your Last Name' name="last_name" htmlFor="custominput" value={post?.last_name} className="form-text-input" id="" onChange={onChange} style={hasValidationError(errors, "last_name") ? { border: "1px solid red" } : {}} />
                                    {hasValidationError(errors, "last_name") ? (<span className="has-cust-error-white">{validationError(errors, "last_name")}</span>) : null}
                                </div>
                            </div>
                            <div className="form-control-wrap">
                                <div className="form-text">
                                    <label className="form-text-label pt-2 " id="">Mobile Number (optional)</label>
                                    <input type="number" placeholder='Enter your Mobile Number' name="mobile_number" htmlFor="custominput" value={post?.mobile_number} className="form-text-input" id="" onChange={onChange} style={hasValidationError(errors, "mobile_number") ? { border: "1px solid red" } : {}} />
                                    {/* {hasValidationError(errors, "mobile_number") ? (<span className="has-cust-error-white">{validationError(errors, "mobile_number")}</span>) : null} */}
                                </div>
                            </div>
                            <div className="form-control-wrap">
                                <div className="form-text">
                                    <label className="form-text-label pt-2" id="">Email</label>
                                    <input type="email" placeholder='Enter your Email Address' name="email" htmlFor="custominput" value={post?.email} className="form-text-input" id="" onChange={onChange} style={hasValidationError(errors, "email") ? { border: "1px solid red" } : {}} />
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
                            <div className="mb-3 form-control-wrap">
                                <div className="form-text">
                                    <label className="form-text-label pt-2" id="">Confirm Password</label>
                                    <input type={passShow ? "text" : "password"} placeholder='Enter your Confirm Password ' name="confirm_password" htmlFor="custominput" value={post?.confirm_password} className="form-text-input" id="" onChange={onChange} style={hasValidationError(errors, "confirm_password") ? { border: "1px solid red" } : {}} />
                                    <span onClick={() => setPassShow(!passShow)} className='eys-icon'><em className={`icon ni ${passShow ? "ni-eye-fill" : "ni-eye-off-fill"}`}></em></span>
                                    {/* {hasValidationError(errors, "confirm_password") ? (<span className="has-cust-error-white">{validationError(errors, "confirm_password")}</span>) : null} */}
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
                                <button className='justify-center  btn btn-dim btn-orangelight my-3 w-full' type='submit'>Register</button>
                            </div>
                            <p className='create-new-account pb-3'>Already have an account !  {"  "}<NavLink to='/login'>Log in</NavLink> </p>
                        </div>

                    </div>

                </form>
            </div>
        </>
    )
}

export default Register