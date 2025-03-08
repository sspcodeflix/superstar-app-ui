import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { focusOnFeild, hasValidationError, validationError } from '../helpers/Frontend';
import { toast } from 'react-toastify';
import Chatbox from '../components/Sections/Chatbox';
import Loading from '../components/Loading/Loading';
import { API_BASE_URL_SERVER } from '../config/Commen';
import { UploadDoc } from '../components/Sections/UploadDoc';
import { AlreadyAddedDoc } from '../components/Sections/AlreadyAddedDoc';



export const NowChat = () => {

    const [docSID, setDocId] = useState()
    const [doctitle, setDoctitle] = useState()
    const [activeTab, setActiveTab] = useState(1);

    const handleNextClick = () => {
        setActiveTab(prevTab => prevTab + 1);
    }
    var dict = {
        'Chat': Chatbox,
    }



    return (

        <div className="nk-content ">
            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body">
                        <div className="content-page wide-md ml-3">
                            <div className="nk-block">
                                <div className="card card-bordered">
                                    <div className="card-inner card-inner-xl">
                                        {/* <ul className="nav nav-tabs">
                                            {Object.entries(dict).map(([key, value], index) => (
                                                <li className="nav-item" key={key + "-" + index}>
                                                    <a
                                                        onClick={() => {

                                                            setActiveTab(index + 1)

                                                        }}
                                                        href={`/#tabItem${index + 1}`}
                                                        className={`nav-link nav-link-set ${index + 1 === activeTab ? 'active' : ''} 
                                                        ${ activeTab == 2 && key== "Chat" && docSID === undefined ||activeTab == 1 && key== "Chat" && docSID === undefined  ? 'disabled' : ''}`}
                                                        data-bs-toggle="tab">
                                                        {key == "Chat" ?
                                                            <em style={{ fontSize: "20px" }} class="icon ni ni-chat-circle-fill"></em> :
                                                            key == "Select existing Data" ?
                                                                <em style={{ fontSize: "22px" }} class="icon ni ni-archive-fill"></em>
                                                                : <em style={{ fontSize: "22px" }} className="ni ni-upload-cloud"></em>}
                                                        {key}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul> */}
                                        <div className="tab-content">
                                            {Object.entries(dict).map(([key, Component], index) => (
                                                <div
                                                    className={`tab-pane ${index + 1 === activeTab ? 'active' : ''}`}
                                                    id={`tabItem${index + 1}`}
                                                    key={index}
                                                >
                                                    <Component setActiveTab={setActiveTab} handleNextClick={handleNextClick}
                                                    doctitle={doctitle} setDoctitle={setDoctitle}
                                                    docSID={docSID} setDocId={setDocId} />
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

