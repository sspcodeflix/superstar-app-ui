import { useState } from "react";
import { focusOnFeild } from "./Frontend";
export const Inputvalidate = (inputNameArray ,post,setErrors) => {
    const newError = {};
    let positionFocus = "";
    // console.log(inputNameArray ,post, "<<<<<<");
    var regex = /^[0-9]+$/
    const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    inputNameArray?.map((item)=>{
        if(item == "email"){
            if (!post?.[item] || !post?.[item].trim()) {
                newError[item] = "Required";
                positionFocus = positionFocus || item;
            } else if (!emailRE.test(post?.[item])) {
                newError[item] = "Enter a valid email";
                positionFocus = positionFocus || item;
            }
        }else{
            if (!post?.[item] || !post?.[item].trim()) {
                newError[item] = "Required";
                positionFocus = positionFocus || item;
            }
        }
    })
    setErrors(newError);
    if (positionFocus) {
        focusOnFeild(positionFocus);
        return false;
    }
    return true;
}