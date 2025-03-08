import React from 'react'
import LoadingRow from './LoadingRow'

function Alerts({ title, messagetype, setalertShow }) {
    return (
        <div className=" example-alert">
            <div style={messagetype == "loading" ? { textAlign: "center",padding:"1px" } : {}} className={`alert alert-${messagetype == "error" ? "danger" : "success"} alert-icon`}>
                {
                    messagetype == "loading" ? <LoadingRow /> :
                        <>
                            <em className={`icon ni ni-${messagetype == "error" ? "alert" : "check"}-circle`}></em> <strong>{title}</strong>
                        </>
                }
                {
                    messagetype == "loading" ? "" :
                        <a style={{ float: "right" }} onClick={() => { setalertShow(false) }}>
                            <em onClick={() => { setalertShow(false) }} style={{ fontSize: "21px" }} className={`icon ni ni-cross-circle cursor-pointer`}></em>
                        </a>
                }
            </div>
        </div>
    )
}

export default Alerts