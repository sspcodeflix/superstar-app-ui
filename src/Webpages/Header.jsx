import React from 'react'

export const Header = ({ pathname }) => {
    const userData = sessionStorage.getItem("userInfo") ? JSON.parse(sessionStorage.getItem("userInfo")):null
    const user = sessionStorage.getItem("user") ? sessionStorage.getItem("user"):null
    
    console.log( "<<<<<<<" ,userData);
    return (
        <div className="nk-header nk-header-fixed is-light">
            <div className="container-fluid">
                <div className="nk-header-wrap">
                    <div className="nk-menu-trigger d-xl-none ms-n1">
                        <a href="/" className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em
                            className="icon ni ni-menu"></em></a>
                    </div>
                    <div className="nk-header-brand d-xl-none">
                        <a href="/" className="logo-link">
                            <img className="logo-light logo-img" src="./images/logo.png"
                                srcSet="./images/logo2x.png 2x" alt="logo" />
                            <img className="logo-dark logo-img" src="./images/logo-dark.png"
                                srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
                        </a>
                    </div>
                    <div className="nk-header-news d-none d-xl-block">
                        <div className="nk-news-list">
                            <a className="nk-news-item" href="/">
                                <div className="nk-news-icon">
                                    <em className="icon ni ni-card-view"></em>
                                </div>
                                <div className="nk-news-text">
                                    <div>Welcome{"  "}
                                         { userData?.given_name ? " " +userData?.given_name + " " + userData?.family_name : user? user : "  User Name"}
                                         </div>
                                    {/* <em className="icon ni ni-external"></em> */}
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="nk-header-tools">
                        <ul className="nk-quick-nav">
                            <li className="dropdown user-dropdown">
                                <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                                    <div className="user-toggle">
                                        <div className="user-avatar sm">
                                            <em className="icon ni ni-user-alt"></em>
                                        </div>
                                        <div className="user-info d-none d-md-block">
                                            <div className="user-status">Administrator</div>
                                            <div className="user-name dropdown-indicator">{ userData?.given_name ? " " +userData?.given_name + " " + userData?.family_name : user ?user : "User Name"}</div>
                                        </div>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1">
                                    <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                        <div className="user-card">
                                            <div className="user-avatar">
                                            <em className="icon ni ni-user-alt"></em>
                                            </div>
                                            <div className="user-info">
                                                <span className="lead-text">{userData?.given_name ? userData?.given_name + " " + userData?.family_name : user ? user :"User Name"}</span>
                                                <span className="sub-text">{userData?.email ? userData?.email : sessionStorage.getItem("email") ? sessionStorage.getItem("email") :  "test@gmail.com" }</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-inner">
                                        <ul className="link-list">
                                            <li><a><em className="icon ni ni-setting-alt"></em><span>Account Setting</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown-inner">
                                        <ul className="link-list">
                                            <li className='cursor-pointer'><a 
                                            onClick={()=>{
                                                sessionStorage.clear()
                                                window.location = "/"
                                            }}
                                            ><em className="icon ni ni-signout"></em><span>Sign out</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}