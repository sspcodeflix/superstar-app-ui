import React from 'react';
import { useState } from 'react'
import { ReviewDoc } from '../components/chatwithsuper/ReviewDoc';
import { DownloadDoc } from '../components/chatwithsuper/DownloadDoc';
import { UploadDoc2 } from '../components/chatwithsuper/UploadDoc';


export const ChatwithSuper = () => {

    const [activeTab, setActiveTab] = useState(1);
    const [docSID, setDocId] = useState()
    const [doctitle, setDoctitle] = useState()

    const handleNextClick = () => {
        // Increment the activeTab state to show the next tab
        if (activeTab > 2) {
            setActiveTab(1)
        } else {
            setActiveTab(activeTab + 1);
        }
    }

    var dict = {
        'Upload Document': UploadDoc2,
        'Review Document': ReviewDoc,
        'Download Document': DownloadDoc,
    }

    return (

        <div className="nk-content">
            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body">
                        <div className="content-page ml-3">
                            <div className="nk-block">
                                <div className="card card-bordered">
                                    <div className="card-inner card-inner-xl">
                                        <ul className="nav nav-tabs">
                                            {Object.entries(dict).map(([key, value], index) => (
                                                <li className="nav-item" key={key + "-" + index}>
                                                    <a
                                                        onClick={() => {

                                                            setActiveTab(index + 1)

                                                        }}
                                                        href={`/#tabItem${index + 1}`}
                                                        className={`nav-link nav-link-set ${index + 1 === activeTab ? 'active' : ''} 
                                                        ${activeTab == 2 && key == "Chat" && docSID === undefined || activeTab == 1 && key == "Chat" && docSID === undefined ? 'disabled' : ''}`}
                                                        data-bs-toggle="tab">
                                                        {key == "Review Document" ?
                                                            <em style={{ fontSize: "20px" }} className="icon ni ni-file-text-fill"></em> :
                                                            key == "Download Document" ?
                                                                <em style={{ fontSize: "22px" }} className="icon ni ni-download-cloud"></em>
                                                                : <em style={{ fontSize: "22px" }} className="ni ni-upload-cloud"></em>}
                                                        {key}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
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

