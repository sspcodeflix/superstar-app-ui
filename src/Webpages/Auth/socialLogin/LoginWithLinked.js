import React, { useEffect } from 'react'
import { useCommen } from '../../../contextapi/commenContext/commenContext';
import { LinkedIn, LinkedInCallback, useLinkedIn } from 'react-linkedin-login-oauth2';


function LoginWithLinked() {
  const { apiLoginRequest, errorMes, isLoading, resData } = useCommen()
  const { state, error } = useLinkedIn();
  const handleSuccess = (data) => {
    // Handle the successful login. 'data' contains user profile information.
    console.log(data);
  };

  const handleFailure = (error) => {
    // Handle login failure or errors.
    console.error(error);
  };
  return (
    <>
      <LinkedIn
        clientId="YOUR_CLIENT_ID"
        onFailure={handleFailure}
        onSuccess={handleSuccess}
        redirectUri="http://localhost:3001/chat-now"
        scope="r_liteprofile r_emailaddress"
      >
        {/* <img src={LinkedInIcon} alt="Login with LinkedIn" /> */}
        <span>Login with LinkedIn</span>
      </LinkedIn>
      <LinkedInCallback>
        {state === "loading" && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
      </LinkedInCallback>
    </>
  );
}

export default LoginWithLinked