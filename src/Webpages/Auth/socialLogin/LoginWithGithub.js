import React, { useEffect } from 'react'
import { useCommen } from '../../../contextapi/commenContext/commenContext';
import GitHubLogin from 'react-github-login';
import { API_BASE_URL_SERVER, GITHUB_CLIENT_ID } from '../../../config/Commen';


function LoginWithGithub() {
  const { apiLoginRequest, errorMes, isLoading, resData } = useCommen()
  const onSuccess = async(response) => {
    console.log('GitHub login success:', response);
    // Handle the successful login here, e.g., set user state or redirect
    if (response?.clientId) {
      const data = {
        // email: userData.email,
        // github_id:response?.clientId,
        // first_name: userData.given_name ,
        // last_name: userData.family_name
      }
      // console.log(data, "<<<<", response?.clientId);
      const config = {
        method: "post",
        url: `${API_BASE_URL_SERVER}/github`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      }
      await apiLoginRequest(config)
    }
  };

  const onFailure = response => {
    console.error('GitHub login error:', response);
    // Handle the login failure here, e.g., show an error message
  };
  return (
    <>
      <GitHubLogin
      clientId={GITHUB_CLIENT_ID}
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
    </>
  );
}

export default LoginWithGithub