


import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { focusOnFeild, hasValidationError, validationError } from '../../helpers/Frontend';
import Loading from '../Loading/Loading';
import { API_BASE_URL_SERVER } from '../../config/Commen';



export const UploadDoc = ({ setActiveTab, setDocId, setDoctitle, activeTab }) => {
    const [post, setPost] = useState({ title: "", embedding: "1" })
    const [submitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState([]);
    const [file, setFile] = useState("")
    const [errorMessage, setErrorMessage] = useState();
    const [filename, setFilename] = useState("Choose file");
    const [documentType, setdocumentType] = useState("application/pdf")
    const [shownextBtn, setshownextBtn] = useState(false)
    var [formType, setformType] = useState("uploadPdf")

    const onChange = (e) => {
        const { name, value } = e.target
        if (e.target.type == "file") {
            const selectedFile = e.target.files[0];
            if (selectedFile.type != documentType) { setErrorMessage("Please upload selected document  type file ") } else { setErrorMessage() }
            if (selectedFile) {
                setFilename(selectedFile.name);
                setFile(selectedFile);
            }
        }
        setPost((prevState) => ({ ...prevState, [name]: value }));
        // console.log(activeTab , "<<<<<<<<<<activeTab");
    }
    const validate = () => {
        const newError = {};
        let positionFocus = "";
        var regex = /^[0-9]+$/
        const urlPattern = /^(http|https):\/\/([^\s]+)/;
        if (formType == "uploadPdf") {
            if (!post.title || !post.title.trim()) {
                newError["title"] = "Required";
                positionFocus = positionFocus || "title";
            }

            if (file?.name == "") {
                newError["file"] = "Required";
                positionFocus = positionFocus || "file";
            }
            if (regex.test(post.title)) {
                newError["title"] = "Title should be start with alphabets";
                positionFocus = positionFocus || "title";
                console.log(regex.test(post.title));
            }

        }

        if (formType == "ziraLink") {
            if (!post?.ziraLink || !post?.ziraLink.trim()) {
                newError["ziraLink"] = "Required";
                positionFocus = positionFocus || "ziraLink";
            }
            if (!urlPattern.test(post?.ziraLink)) {
                newError["ziraLink"] = "Please Enter a valid link !";
                positionFocus = positionFocus || "ziraLink";
                console.log(urlPattern.test(post?.ziraLink));
            }
        }
        if (formType == "conflanceLink") {
            if (!post?.conflanceLink || !post?.conflanceLink.trim()) {
                newError["conflanceLink"] = "Required";
                positionFocus = positionFocus || "conflanceLink";
            }
            if (!urlPattern.test(post?.conflanceLink)) {
                newError["conflanceLink"] = "Please Enter a valid link !";
                positionFocus = positionFocus || "conflanceLink";
                // console.log(urlPattern.test(post?.conflanceLink));
            }
        }

        setErrors(newError);
        if (positionFocus) {
            focusOnFeild(positionFocus);
            return false;
        }
        return true;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (submitting) {
            return;
        }
        if (!validate()) {
            return;
        }
        if(formType == "conflanceLink"){
            handleSubmitconflance(e)
        }else{
            handleSubmitdoc(e);
        }
    }
    const handleSubmitdoc = (event) => {
        setIsSubmitting(true)
        event.preventDefault();
        const url = `${API_BASE_URL_SERVER}/api/1.0/doc/upload`;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', post?.title);
        formData.append('embedding', post?.embedding);
        const config = {
            headers: {},
        };
        //after res get success
        axios.post(url, formData, config)
            .then((response) => {
                if (response.status == 201) {
                    toast.success("Document details  saved successfully")
                    setshownextBtn(false)
                    setPost({})
                    setFile()
                    setIsSubmitting(false)
                }
            })
            .catch((error) => {
                console.error("Error uploading file: ", error);
                toast.error(error.message + " " + error?.response?.data?.message)
                setIsSubmitting(false)
            });
    }

    var handleSubmitconflance =  (event) => {
        setIsSubmitting(true)
        event.preventDefault();
        const url = `${API_BASE_URL_SERVER}/api/1.0/doc/confluence`;
        const formData = {
            page_url: post?.conflanceLink
            // "https://superstar-confibot.atlassian.net/wiki/spaces/SD/pages/786433/mlflow"
        }
        const config = {
            headers: {},
        };
        //after res get success
        axios.post(url, formData, config)
            .then((response) => {
                if (response.status == 201) {
                    toast.success(response.data.message)
                    setshownextBtn(false)
                    setPost({})
                    setIsSubmitting(false)
                    
                }
            })
            .catch((error) => {
                toast.error(error.message + " " + error?.response?.data?.message)
                setIsSubmitting(false)
            });
    }

    const handleType = (e) => {
        setformType(e.target.value)
    }


    return (
        <>
            <form className='position-relative' onSubmit={onSubmit} >
                {submitting && <Loading title={"File is processing Please wait ... "} />}
                <div className="alert alert-pro  my-3">
                    <h6 className="title mb-3">Select Data Source</h6>
                    <ul className="custom-control-group mb-3">
                        <li>
                            <div className="custom-control custom-control-sm custom-radio custom-control-pro">
                                <input type="radio" value="uploadPdf" onChange={handleType} checked={formType == "uploadPdf"} className="custom-control-input" name="btnRadio" id="btnRadio1" />
                                <label className="custom-control-label" for="btnRadio1">Upload Doc/PDF</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-control-sm custom-radio custom-control-pro checked">
                                <input type="radio" value="ziraLink" onChange={handleType} checked={formType == "ziraLink"} className="custom-control-input" name="btnRadio" id="btnRadio2" />
                                <label className="custom-control-label" for="btnRadio2">Jira</label>
                            </div>
                        </li>
                        <li>
                            <div className="custom-control custom-control-sm custom-radio custom-control-pro">
                                <input type="radio" value="conflanceLink" onChange={handleType} checked={formType == "conflanceLink"} className="custom-control-input" name="btnRadio" id="btnRadio3" />
                                <label className="custom-control-label" for="btnRadio3">Confluence</label>
                            </div>
                        </li>
                    </ul>
                    {
                        formType == "uploadPdf" ?
                            <>
                                <div className="form-group">
                                    <div className="form-control-wrap">
                                        <div className="form-text">
                                            <label className="form-text-label" id="">Document Title</label>
                                            <input type="text" placeholder='Title' name="title" htmlFor="custominput" value={post?.title} className="form-text-input" id="" onChange={onChange} style={hasValidationError(errors, "title") ? { border: "1px solid red" } : {}} />
                                            {hasValidationError(errors, "title") ? (<span className="has-cust-error">{validationError(errors, "title")}</span>) : null}
                                        </div>
                                    </div>
                                    {/* <div className="form-control-wrap">
                            <div className="form-text">
                                <label className="form-text-label" >Document Description</label>
                                <textarea type="text" placeholder='Description' name="description" value={post?.description} htmlFor="custominput" className="custom-textarea form-text-input" id="" onChange={onChange} style={hasValidationError(errors, "description")  ? { border: "1px solid red" } : {}} />
                                {hasValidationError(errors, "description") ? (<span className="has-cust-error">{post?.description== ""&& validationError(errors, "description")}</span>) : null}
                            </div>
                        </div> */}
                                </div>

                                <div className="form-group">
                                    <label className="form-label" as="customFileLabel"> {documentType == "application/pdf" ? "PDF" : documentType == "application/docx" ? "DOCX" : "Default"} {" "} File Upload</label>
                                    <div className="form-control-wrap">
                                        <div className="form-file">
                                            <input type="file" name="file" accept=".docx, .pdf" required={true} className="form-file-input" id="customFile" onChange={onChange} style={hasValidationError(errors, "file") ? { border: "1px solid red" } : {}} />
                                            <label className="form-file-label" htmlFor="customFile">{filename}</label>
                                            {errorMessage && <p className='has-cust-error'>{errorMessage}</p>}
                                        </div>
                                    </div>
                                </div>
                            </> : formType == "ziraLink" ?
                                <>
                                    <div className="form-group">
                                        <div className="form-control-wrap">
                                            <div className="form-text">
                                                <label className="form-text-label" id="">Jira Link</label>
                                                <input type="text" placeholder='Enter Page Url' name="ziraLink" htmlFor="custominput" value={post?.ziraLink} className="form-text-input" id="" onChange={onChange} style={hasValidationError(errors, "ziraLink") ? { border: "1px solid red" } : {}} />
                                                {hasValidationError(errors, "ziraLink") ? (<span className="has-cust-error">{validationError(errors, "ziraLink")}</span>) : null}
                                            </div>
                                        </div>
                                    </div>
                                </> : formType == "conflanceLink" ?
                                    <>
                                        <div className="form-group">
                                            <div className="form-control-wrap">
                                                <div className="form-text">
                                                    <label className="form-text-label" id="">Confluence  Link</label>
                                                    <input type="text" placeholder=' Enter Page Url' name="conflanceLink" htmlFor="custominput" value={post?.conflanceLink} className="form-text-input" id="" onChange={onChange} style={hasValidationError(errors, "conflanceLink") ? { border: "1px solid red" } : {}} />
                                                    {hasValidationError(errors, "conflanceLink") ? (<span className="has-cust-error">{validationError(errors, "conflanceLink")}</span>) : null}
                                                </div>
                                            </div>
                                        </div>
                                    </> : ""
                    }
                    {/* {
                        formType == "conflanceLink" ?
                            <button className="btn btn-dim btn-orangelight my-3"
                                type='button' onClick={onSubmit}> {submitting ? "loading..." : "Upload"} </button> */}
                            {/* : */}
                             <button className="btn btn-dim btn-orangelight my-3"
                                type='submit'> {submitting ? "loading..." : activeTab == 2 ? "Upload" : "Chat"} </button>

                    {/* } */}
                </div>
            </form>
        </>)

}