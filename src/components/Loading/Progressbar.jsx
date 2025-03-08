import React from 'react'

const Progressbar = ({ bgcolor, progress, height }) => {

    const Parentdiv = {
        height: height,
        width: '80%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'right'
    }

    const progresstext = {
        // padding: "0 10px",
        fontWeight: 600,
        color: "white",
        fontSize: "11px",
        position: "relative",
        top: "-4px"
    }

    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <span style={progresstext}>{`${progress}${progress == "Failed" ? "":"%"} `}</span>
                {/* <span class="badge badge-dot bg-warning">Processing</span> */}

            </div>
        </div>
    )
}

export default Progressbar; 
