import { GoogleLogin } from '@react-oauth/google';
import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode';
import { useCommen } from '../../../contextapi/commenContext/commenContext';
import { API_BASE_URL_SERVER } from '../../../config/Commen';

function LoginWithGoogle({setResMessageErr,setalertShow,setResMessage}) {

  const { apiLoginRequest, errorMes, isLoading, resData ,setErrorMes,setresData ,setIsLoading} = useCommen()
  const responseGoogle = async (response) => {
    setalertShow(true)
    setIsLoading(true)
    let userData = jwt_decode(response?.credential)
    if (response?.clientId) {
      const data = {
        email: userData.email,
        google_id:response?.clientId,
        given_name: userData.given_name ,
        family_name: userData.family_name
      }
       sessionStorage.setItem("userInfo",JSON.stringify(data))

      const config = {
        method: "post",
        url: `${API_BASE_URL_SERVER}/google`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      }
      await apiLoginRequest(config)
    }
  };

  useEffect(() => {
    if (errorMes && isLoading == false) { 
      setResMessageErr("Please check Your email !") 
        setErrorMes()
    }
    if (resData?.status == 201 && isLoading == false) {
      setResMessage(resData?.data?.message)
        setErrorMes()
        setresData()
        //  console.log(resData, "<<<<<");
    }
}, [errorMes, isLoading])


  const responseGoogleerror = (response) => {
    console.log(response, "<<<<<<<err");
    // Handle the Google login response, e.g., send it to your server for authentication
  };
  return (
    <GoogleLogin
      onSuccess={responseGoogle}
      onError={responseGoogleerror}
    />
  );
}

export default LoginWithGoogle