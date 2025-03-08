import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CommenContext = createContext();

export const useCommen = () => {
  return useContext(CommenContext);
};

export const CommenContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [resData, setresData] = useState();
  const [errorMes, setErrorMes] = useState();
  // const navigate = useNavigate()

  const apiRequest = async (config) => {
      setIsLoading(true);
    try {
      const response = await axios.request(config);
      if(response.status == 200){
        console.log(response ,"<<<<<<<")

      }
      setIsLoading(false);
      setresData(response)
      // navigate("/login")
    } catch (error) {
      setIsLoading(false);
      if(error){
        console.log(error);
        setErrorMes(error)
      }
    }
  };
  const apiLoginRequest = async (config) => {
      setIsLoading(true);
    try {
      const response = await axios.request(config);
      setIsLoading(false);
      // console.log(response)
      if(response.status == 200){
        setresData(response)
        // sessionStorage.setItem("accesstoken",response.data.accesstoken.access)
      }
      // navigate("/")
    } catch (error) {
      setIsLoading(false);
      if(error){
        console.log(error);
        setErrorMes(error)
      }
    }
  };

 

  const value = {
    apiRequest,
    isLoading,
    resData,setresData,setIsLoading,
    errorMes,setErrorMes,apiLoginRequest
  };

  return (
  <CommenContext.Provider value={value}>{children}</CommenContext.Provider>
  );
};
