import axios from 'axios'
import TextareaAutosize from 'react-textarea-autosize';
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { API_BASE_URL_SERVER } from '../../config/Commen'
import Loading from '../../components/Loading/Loading';
import Botloading from '../Loading/Botloading';
var pattern = /^(?!\.)[a-zA-Z0-9-. .?  ]+$/;

function WithChatbox({ docSID, setDocId, doctitle }) {
    const [showCurrectModalChat, setshowCurrectModalChat] = useState({})
    const [sidebarExpand, setSidebarExpand] = useState(true)
    const [userMessages, setUserMessages] = useState("")
    const [messagepreview, setMessagepreview] = useState([])
    const [lenghtofarr, setLength] = useState()
    const [isValidMessage, setValidMessage] = useState()
    const [textboxdisable, settextboxdisable] = useState(false)
    const [isloading, setisLoading] = useState(true)
    const [isGenric, setGenric] = useState(false)
    const [messageload, setmessageload] = useState(false)
    const [hideChat, sethideChat] = useState(false)
    const [ISbotLoading, setISbotLoading] = useState(false)
    const [chatModals, setchatModals] = useState([])
    const textareaRef = useRef(null);
    const handleKeyDown = (e) => {
        if (e.key === 'Delete' || e.key === 'Backspace') {
            e.preventDefault(); // Prevent the default browser behavior
            if (textareaRef.current) {
                const start = textareaRef.current.selectionStart;
                const end = textareaRef.current.selectionEnd;
                const newText = userMessages.substring(0, start) + userMessages.substring(end);
                if (start == end) {
                    const newText2 = userMessages.substring(0, start - 1) + userMessages.substring(end);
                    setUserMessages(newText2);
                }
                if (start !== end) {
                    setUserMessages(newText);
                    textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start;
                }
            }
        }
    };
    const ref = useRef(null)
    const scrollToSection = () => {
        // Get a reference to the section
        const section = ref.current;
        if (section) {
            section.scrollTop = Math.max(section.scrollHeight + 200);
        }
    };

    const fetchModales = async () => {
        let data = new FormData();
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${API_BASE_URL_SERVER}/api/1.0/chat/bots`,
            headers: {
                "Content-type": "application/json",
            },
            data: data
        };
        await axios.request(config)
            .then((response) => {
                if (response?.status == 200) {
                    setchatModals(response.data)
                    setshowCurrectModalChat(response.data[0])
                    let data = new FormData();
                    let config = {
                        method: 'get',
                        maxBodyLength: Infinity,
                        url: `${API_BASE_URL_SERVER}/api/1.0/chats?bot_id=${response.data[0]?.bot_id}`,
                        headers: {
                        },
                        data: data
                    };
                    axios.request(config)
                        .then((response) => {
                            if (response?.status == 200) {
                                setTimeout(() => {
                                    setMessagepreview(response.data?.chats)
                                }, 50);
                                setTimeout(() => {
                                    setLength(response.data.chats.length)
                                }, 800);
                            }
                            setisLoading(false)
                        })
                        .catch((error) => {
                            setisLoading(false)
                            console.log(error);
                            toast.error(error.message + " " + "Please check ")
                        });
                }
            })
            .catch((error) => {
                setisLoading(false)
                console.log(error);
                toast.error(error.message + " " + "Please check ")
            });
    }
    const refershHandle = async () => {
        setisLoading(true)
        await axios.get(`${API_BASE_URL_SERVER}/api/1.0/chats?bot_id=${showCurrectModalChat?.bot_id}`)
            .then((response) => {
                if (response?.status == 200) {
                    setTimeout(() => {
                        setMessagepreview(response.data?.chats)
                    }, 50);
                    setTimeout(() => {
                        setLength(response.data.chats.length)
                    }, 800);
                    setisLoading(false)
                }
            })
            .catch((error) => {
                setisLoading(false)
                toast.error(error.message + " " + "Please check ")
            });
    }
    const handleModalChat = async (id, bot_id) => {
        setSidebarExpand(true)
        sethideChat(false)
        setisLoading(true)
        setValidMessage("true")
        setUserMessages("")
        setshowCurrectModalChat(chatModals.filter((item) => {
            return item.id == id
        })[0])
        let data = new FormData();
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${API_BASE_URL_SERVER}/api/1.0/chats?bot_id=${bot_id}`,
            headers: {
            },
            data: data
        };
        await axios.request(config)
            .then((response) => {
                if (response?.status == 200) {
                    setTimeout(() => {
                        setMessagepreview(response.data?.chats)
                    }, 50);
                    setTimeout(() => {
                        setLength(response.data.chats.length)
                    }, 800);
                    setisLoading(false)
                }
            })
            .catch((error) => {
                setisLoading(false)
                toast.error(error.response?.data?.message + " " + " ")
            });
    }
    useEffect(() => { fetchModales() }, [])

    const handleCopy = (event) => {
        event.preventDefault();
        const selectedText = window.getSelection().toString();
        if (selectedText) {
            navigator.clipboard.writeText(selectedText)
                .then(() => {
                    // console.log( selectedText);
                })
                .catch((err) => {
                    console.error('Error copying text:', err);
                });
        }
    };
    const handlePaste = (event) => {
        event.preventDefault();
        navigator.clipboard.readText()
            .then((text) => {
                setUserMessages(pre => pre + " " + text);
                console.log(userMessages, "<<<<<<<", text);
            })
            .catch((err) => {
                console.error('Error pasting text:', err);
            });
    };


    const handleMessage = (e) => {
        if (pattern.test(e.target.value)) {
            setUserMessages(e.target.value)
        }
        if (pattern.test(e.target.value) == false && userMessages.length == 1) {
            setUserMessages("")
        }
        scrollToSection()
    }
    const sendMessageHandle = async (id, bot_id) => {
        scrollToSection()
        setmessageload(true)
        settextboxdisable(true)
        setISbotLoading(true)
        if (userMessages == "") { toast.error("Please type a message !") }
        messagepreview?.push({ message: userMessages, sender: messagepreview[0]?.sender })
        if (userMessages != "") {
        }
        var data = new FormData();
        data.append('msg', userMessages);
        data.append('bot_id', bot_id);
        data.append('doc_id', docSID);
        data.append('status', isGenric);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${API_BASE_URL_SERVER}/api/1.0/chat`,
            headers: {},
            data: data
        };
        await axios.request(config)
            .then((response) => {
                // console.log(response, "<<<setGenric");
                if (response?.status == 201) {
                    setmessageload(false)
                    settextboxdisable(false)
                    scrollToSection()
                    setTimeout(() => {
                        setISbotLoading(false)
                        messagepreview?.push({ message: response.data.chat_messages[1]?.message, sender: "bot" })
                    }, 50);

                    setTimeout(() => {
                        setLength(messagepreview.length)
                    }, 800);
                    setUserMessages("")
                }
            })
            .catch((error) => {
                toast.error(error.message + " " + "Please check ")
                setmessageload(false)
            });
    }
    useEffect(() => {
        scrollToSection()
        // console.log(messagepreview , "<<<<<<");
    }, [lenghtofarr])

    return (
        <div className="alert alert-pro  my-3">
            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body" >
                        <div className="nk-chat"  >
                            {isloading && <Loading />}
                            {/* {
                                messagepreview.length == 0 && !isloading ? <>
                                    <div className='chat-not-found'>
                                        <p>
                                            Chat Not Found !
                                        </p>
                                    </div>
                                </> : ""
                            } */}
                            <div className={` ${sidebarExpand ? "isExpandClass" : ""} nk-chat-aside`}>
                                <div className="nk-chat-aside-head">
                                    {!sidebarExpand && <div className="nk-chat-aside-user">
                                        <div className="dropdown">
                                            <a href="#" className="dropdown-toggle dropdown" data-bs-toggle="" aria-expanded="false">
                                                <div className="user-ava">
                                                    {/* <img src="./images/avatar/b-sm.jpg" alt=""/> */}
                                                    <svg viewBox="0 0 24 24" width="24" height="24"><path d="M10 3H14C18.4183 3 22 6.58172 22 11C22 15.4183 18.4183 19 14 19V22.5C9 20.5 2 17.5 2 11C2 6.58172 5.58172 3 10 3Z" fill="#FB2707"></path></svg>
                                                </div>
                                                <div className="title">Chat Box</div>
                                            </a>
                                        </div>
                                    </div>}
                                    <ul className="nk-chat-aside-tools g-2">
                                        <li>
                                            <div className="dropdown">
                                                <span className='cursor-pointer' onClick={() => { setSidebarExpand(!sidebarExpand) }}>
                                                    {
                                                        sidebarExpand ?
                                                            <svg viewBox="0 0 24 24" width="24" height="24"><path d="M21 17.9996V19.9996H3V17.9996H21ZM17.0503 3.5498L22 8.49955L17.0503 13.4493V3.5498ZM12 10.9996V12.9996H3V10.9996H12ZM12 3.99955V5.99955H3V3.99955H12Z" fill="rgba(173,184,194,1)"></path></svg> :
                                                            <svg viewBox="0 0 24 24" width="24" height="24"><path d="M21 17.9996V19.9996H3V17.9996H21ZM6.94975 3.5498V13.4493L2 8.49955L6.94975 3.5498ZM21 10.9996V12.9996H12V10.9996H21ZM21 3.99955V5.99955H12V3.99955H21Z" fill="rgba(173,184,194,1)"></path></svg>
                                                    }
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nk-chat-aside-body" data-simplebar>
                                    <div className="nk-chat-list">
                                        <h6 className="title overline-title-alt">{sidebarExpand ? " " : "Modals"}</h6>
                                        <ul className="chat-list">
                                            {
                                                chatModals?.map((item, index) => {
                                                    return (
                                                        <li className={`chat-item ${item?.isRead ? "is-unread" : ""}`} key={index}>
                                                            <a className={`${showCurrectModalChat?.id == item.id ? "active-chat" : ""} chat-link chat-open `}
                                                                onClick={() => {
                                                                    handleModalChat(item.id, item.bot_id)
                                                                }}
                                                            >
                                                                <div className="chat-media user-avatar">
                                                                    {/* <span>{item?.title}</span> */}
                                                                    <img src={item?.bot_avatar} alt=""></img>
                                                                    <span className="status dot dot-lg dot-success"></span>
                                                                </div>
                                                                <div className="chat-info">
                                                                    <div className="chat-from">
                                                                        <div className="name">{item.bot_id}</div>
                                                                    </div>
                                                                    <div className="chat-context">
                                                                        <div className="text">
                                                                        </div>
                                                                        <div className="status unread">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div style={hideChat ? { zIndex: "-3" } : {}} className="nk-chat-body"  >
                                <div className="nk-chat-head" >
                                    <ul className="nk-chat-head-info">
                                        <li onClick={() => {
                                            setSidebarExpand(false)
                                            sethideChat(true)
                                        }} className="nk-chat-body-close" >
                                            <button type='button'
                                                className="btn btn-icon btn-trigger nk-chat-hide ms-n1"><em className="icon ni ni-arrow-left"></em></button>
                                        </li>
                                        <li className="nk-chat-head-user">
                                            <div className="user-card">
                                                <div className="user-avatar bg-orange">
                                                    <img src={showCurrectModalChat?.bot_avatar} alt=""></img>
                                                </div>
                                                <div className="user-info">
                                                    <div className="lead-text">{showCurrectModalChat?.bot_id}</div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className='doc-title'>
                                        <li className="Generic-item ">
                                            <input type='checkbox' onChange={(e) => { setGenric(e.target.checked); }} />
                                            <label>Fact Check</label>
                                        </li>
                                        <li className="item d-none d-sm-block">
                                            Topic Selected : {"  " + doctitle}
                                        </li>
                                    </ul>
                                    <ul className="nk-chat-head-tools">
                                        <li className="d-none d-sm-block">
                                            <a  className="btn btn-icon  text-primary">
                                                <em style={{ color: "#FB2707" }} class="icon ni ni-trash"></em>
                                            </a>
                                        </li>
                                        <li className="d-none d-sm-block">
                                            <a onClick={refershHandle} className="btn btn-icon  text-primary">
                                                <em style={{ color: "#FB2707" }} class="icon ni ni-history"></em>                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nk-chat-panel" ref={ref} data-simplebar>
                                    {
                                        messagepreview?.map((item, index) => {
                                            return (
                                                <React.Fragment >
                                                    {
                                                        item.sender == messagepreview[0]?.sender ?
                                                            <div className="chat is-me" >
                                                                <div className="chat-content">
                                                                    <div className="chat-bubbles">
                                                                        <div className="chat-bubble">
                                                                            <div className="chat-msg"> {item?.message} </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div> : ""

                                                    }
                                                    {item?.sender == "bot" ?
                                                        <div className="chat is-you">
                                                            <div className="chat-avatar">
                                                                <div className="user-avatar bg-orange">
                                                                    <img src={showCurrectModalChat?.bot_avatar} alt=""></img>
                                                                </div>
                                                            </div>
                                                            <div className="chat-content">
                                                                <div className="chat-bubbles">
                                                                    <div className="chat-bubble">
                                                                        <div className="chat-msg"> {item?.message} </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> : ""
                                                    }
                                                </React.Fragment>
                                            )
                                        })
                                    }

                                </div>
                                {
                                    ISbotLoading &&
                                    <span className="bot_loading" >
                                        <div className="user-avatar bg-orange">
                                            <img src={showCurrectModalChat?.bot_avatar} alt=""></img>
                                        </div>
                                        <Botloading />
                                    </span>
                                }
                                <div className="nk-chat-editor">
                                    <div className="nk-chat-editor-upload  ms-n1">
                                        <a href="#" className="btn btn-sm btn-icon btn-trigger  toggle-opt" data-target="chat-upload">
                                            <svg viewBox="0 0 24 24" width="32" height="32"><path d="M18.5753 13.7114C19.0742 13.7114 19.4733 13.2873 19.4733 12.8134C19.4733 12.3145 19.0742 11.9155 18.5753 11.9155C18.0765 11.9155 17.6774 12.3145 17.6774 12.8134C17.6774 13.3123 18.0765 13.7114 18.5753 13.7114ZM14.1497 13.7114C14.6485 13.7114 15.0476 13.2873 15.0476 12.8134C15.0476 12.3145 14.6485 11.9155 14.1497 11.9155C13.6508 11.9155 13.2517 12.3145 13.2517 12.8134C13.2517 13.3123 13.6508 13.7114 14.1497 13.7114ZM20.717 18.7516C20.5942 18.8253 20.5205 18.9482 20.5451 19.1202C20.5451 19.1693 20.5451 19.2185 20.5696 19.2676C20.6679 19.6854 20.8643 20.349 20.8643 20.3736C20.8643 20.4473 20.8889 20.4964 20.8889 20.5456C20.8889 20.6685 20.7907 20.7668 20.6679 20.7668C20.6187 20.7668 20.5942 20.7422 20.5451 20.7176L19.0961 19.882C18.9978 19.8329 18.875 19.7837 18.7522 19.7837C18.6786 19.7837 18.6049 19.7837 18.5558 19.8083C17.8681 20.0049 17.1559 20.1032 16.3946 20.1032C12.7352 20.1032 9.78815 17.6456 9.78815 14.5983C9.78815 11.5509 12.7352 9.09329 16.3946 9.09329C20.0539 9.09329 23.001 11.5509 23.001 14.5983C23.001 16.2448 22.1168 17.7439 20.717 18.7516ZM16.6737 8.09757C16.581 8.09473 16.488 8.09329 16.3946 8.09329C12.2199 8.09329 8.78815 10.9536 8.78815 14.5983C8.78815 15.1519 8.86733 15.6874 9.01626 16.1975H8.92711C8.04096 16.1975 7.15481 16.0503 6.3425 15.8296C6.26866 15.805 6.19481 15.805 6.12097 15.805C5.97327 15.805 5.82558 15.8541 5.7025 15.9277L3.95482 16.9334C3.90559 16.958 3.85635 16.9825 3.80712 16.9825C3.65943 16.9825 3.53636 16.8599 3.53636 16.7127C3.53636 16.6391 3.56097 16.59 3.58559 16.5164C3.6102 16.4919 3.83174 15.6824 3.95482 15.1918C3.95482 15.1427 3.97943 15.0691 3.97943 15.0201C3.97943 14.8238 3.88097 14.6766 3.75789 14.5785C2.05944 13.3765 1.00098 11.5858 1.00098 9.59876C1.00098 5.94369 4.5702 3 8.95173 3C12.7157 3 15.8802 5.16856 16.6737 8.09757ZM11.5199 8.51604C12.0927 8.51604 12.5462 8.03871 12.5462 7.4898C12.5462 6.91701 12.0927 6.46356 11.5199 6.46356C10.9471 6.46356 10.4937 6.91701 10.4937 7.4898C10.4937 8.06258 10.9471 8.51604 11.5199 8.51604ZM6.26045 8.51604C6.83324 8.51604 7.28669 8.03871 7.28669 7.4898C7.28669 6.91701 6.83324 6.46356 6.26045 6.46356C5.68767 6.46356 5.23421 6.91701 5.23421 7.4898C5.23421 8.06258 5.68767 8.51604 6.26045 8.51604Z" fill="#FB7019"></path></svg>
                                        </a>
                                    </div>
                                    <div className="nk-chat-editor-form">
                                        <div className="form-control-wrap">

                                            <TextareaAutosize
                                                className="form-control form-control-simple "
                                                minRows={1}
                                                maxRows={20}
                                                value={userMessages}
                                                onChange={(e) => {
                                                    if (pattern.test(e.target.value)) {
                                                        setValidMessage("true")
                                                    } else {
                                                        setValidMessage("false")
                                                    }
                                                    if (e.target.value.length > 700) {
                                                        setValidMessage("false")
                                                    }
                                                    handleMessage(e)
                                                }}
                                                ref={textareaRef}
                                                onKeyDown={handleKeyDown}
                                                onCopy={handleCopy}
                                                onPaste={handlePaste}
                                                disabled={textboxdisable}
                                                maxLength={700}
                                                onKeyPress={(e) => {
                                                    if (e.target.value != "" && e.target.value.trim() && pattern.test(e.target.value)) {
                                                        if (e.key == "Enter") {
                                                            scrollToSection()
                                                            sendMessageHandle(showCurrectModalChat?.id, showCurrectModalChat?.bot_id)
                                                        }
                                                    }
                                                }}
                                                style={isValidMessage === "false" ? { borderBottom: "1px solid red" } : { overflow: "hidden" }}
                                                placeholder="Type your message..."
                                            />
                                            {messageload && <span className='load-message'><img src='./messageload.gif' /></span>}
                                        </div>
                                    </div>
                                    <ul className="nk-chat-editor-tools g-2">
                                        <li  >
                                            <button disabled={userMessages == "" || pattern.test(userMessages) == false ? true : false}
                                                onClick={() => {
                                                    isValidMessage === "true" && sendMessageHandle(showCurrectModalChat.id, showCurrectModalChat?.bot_id)
                                                }}
                                                className="btn btn-round btn-orange btn-icon"><em className="icon ni ni-send-alt"></em></button>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WithChatbox