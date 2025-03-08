import { useState } from "react";
import Loading from "../Loading/Loading";

export const UploadDoc2 = ({ index, handleClick }) => {
    const [filename, setFilename] = useState("Choose file");
    const [title, setTitle] = useState("");
    const [desciption, setDesciption] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const handleChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFilename(selectedFile.name);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // const url = '/upload';
        // const formData = new FormData();
        // formData.append('file', file);
        // formData.append('fileName', file.name);
        // const config = {
        //     headers: {},
        // };
        // axios.post(url, formData, config)
        //     .then((response) => {
        //         // console.log(response.data);
        //         setUploadedFile(response.data.file);
        //         setSuccess(true)
        //     })
        //     .catch((error) => {
        //         // console.error("Error uploading file: ", error);
        //         setError(error);
        //     });
    }
    const handleSave = () => {
        console.log("save Content after api")
        if (title && desciption && filename) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 5000)
        } else {
            setError('fill file Info correctly')
            setTimeout(() => {
                setError('')
            }, 5000)
        }
    }
    return (
        <>
            {loading && <Loading />}

            {!loading &&
                <div className='position-relative' >
                    {/* {submitting && <Loading />} */}
                    <div className="alert alert-pro  my-3">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label" as="customFileLabel">File Upload</label>
                                <div className="form-control-wrap">
                                    <div className="form-file">
                                        <input
                                            type="file"
                                            name="file"
                                            className="form-file-input"
                                            id="customFile"
                                            onChange={handleChange}
                                            accept=".docx, .pdf"
                                        />
                                        <label className="form-file-label" htmlFor="customFile">{filename}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="TextInput" className="form-label">File Title</label>
                                <input
                                    type="text"
                                    name='title'
                                    className="form-control form-control-lg"
                                    placeholder={'Enter Title'}
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="TextInput" className="form-label">File Description</label>
                                <input
                                    type="text"
                                    name='desc'
                                    className="form-control form-control-lg"
                                    placeholder={'Enter Description'}
                                    onChange={(e) => setDesciption(e.target.value)}
                                    value={desciption} />
                            </div>
                        </form>
                    {!loading &&
                        <div className="container d-flex justify-content-between">
                            <button className="btn btn-dim btn-orangelight" onClick={handleSave}>{'Save'}</button>
                            {index !== 2 && <button className="btn btn-dim btn-orangelight" onClick={handleClick}>{'Next'}</button>}
                        </div>}
                    </div>
                </div>
            }

            {/* {uploadedFile && <img src={uploadedFile} alt="Uploaded content" />} */}
            {error && <div className="alert alert-pro alert-danger mt-3">
                <div className="alert-text">
                    <h6>Please fill all the information</h6>
                    <p>{error}</p>
                </div>
            </div>}
            {/* {success && <div className="alert alert-pro alert-success mt-3">
                    <div className="alert-text">
                        <h6>Your file has been uploaded successfully</h6>
                        <p>Click on the <em>Next</em> button to add title and description</p>
                    </div>
                </div>} */}


        </>)

}