import {React, useState} from 'react'


export const ContentBox = (props) => {
    const [text, setText] = useState("")
    const [warning, setWarning] = useState(false)

    const handleText = (e) => {
        setText(e.target.value)
        console.log(e.target.value)
        setWarning(false)
    }
    const handleUpper = () => {
        setText(text.toUpperCase())

    }
    const handleLower = () => {
        setText(text.toLowerCase())

    }
    const handleReset = (e) => {
        setText("")
    }
    const showWarning = () => {
        setWarning(true)
    }


    
    return (
        <div className="nk-content ">
            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body">
                        <div className="content-page wide-md ml-10">
                            <div className="nk-block">
                                <div className="card card-bordered">
                                    <div className="card-inner card-inner-xl">
                                        <div className="form-group">
                                        <div class="form-control-wrap">
                                            <textarea className="form-control" rows="10" value={text} onChange={handleText}></textarea>
                                        </div>
                                        </div>
                                        <button className="btn btn-dim btn-success m-2" onClick={handleUpper}>
                                            UPPERCASE
                                        </button>
                                        <button className="btn btn-dim btn-success m-2" onClick={handleLower}>
                                            LOWERCASE
                                        </button>
                                        <button className="btn btn-dim btn-danger m-3" onClick={text ? handleReset : showWarning}>
                                            Reset
                                        </button>
                                        {warning &&
                                            <div className="alert alert-danger" style={{ marginTop: '20px' }} role="alert">Invalid Data</div>
                                        }
                                        {text &&
                                            <div className="alert alert-success" style={{ marginTop: '20px' }} role="alert">
                                                There are {text.split(" ").length} words and {text.length} characters and you can read this text in {text.split(" ").length * 0.008} mins
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}