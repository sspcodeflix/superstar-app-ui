
import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export const SideBar = () => {
    const { pathname } = useLocation()
    const [subMenu, showSubmenu] = useState(true)
    // console.log(pathname , "<<<<<<<");
    return (
        <div className="nk-sidebar nk-sidebar-fixed is-dark " data-content="sidebarMenu">
            <div className="nk-sidebar-element nk-sidebar-head">
                <div className="nk-menu-trigger">
                    <a href="/" className="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu">
                        <em className="icon ni ni-arrow-left"></em>
                    </a>
                    <a href="/" className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex"
                        data-target="sidebarMenu"><em className="icon ni ni-menu"></em></a>
                </div>
                <div className="nk-sidebar-brand">
                    <a href="/chat" className="logo-link nk-sidebar-logo">
                        <img className="logo-light logo-img" src="./images/logo.png" srcSet="./images/logo2x.png 2x"
                            alt="logo" />
                        <img className="logo-dark logo-img" src="./images/logo-dark.png"
                            srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
                    </a>
                </div>
            </div>
            <div className="nk-sidebar-element nk-sidebar-body">
                <div className="nk-sidebar-content">
                    <div className="nk-sidebar-menu" data-simplebar>
                        <ul className="nk-menu">
                            <li className="nk-menu-heading">
                                <h6 className="overline-title text-primary-alt">Use-Case Preview</h6>
                            </li>
                            <li className="nk-menu-item">

                            </li>
                            {/* <li className={`nk-menu-item has-sub ${subMenu ? "active" : ""} `} >
                                <a  className="nk-menu-link cursor-pointer nk-menu-toggle" onClick={() => showSubmenu(!subMenu)} style={subMenu ? {color: "#FB7019"  }:{}}>
                                    <span className="nk-menu-icon"><em className="icon ni ni-tile-thumb" style={subMenu ? {color: "#FB7019"  }:{}}></em></span>
                                    <span className="nk-menu-text">ConverseCrown</span>
                                </a>
                                <ul className="nk-menu-sub" style={subMenu ? { display: "block" } : { transition: "0.4s" }}> */}
                                    <li className="nk-menu-item">
                                        <NavLink to="/chat-now"
                                            className="nk-menu-link"
                                            style={pathname === "/chat-now" ? { color: "#FB7019" } : {}}>
                                            <span className="nk-menu-icon">
                                                <em style={pathname == "/chat-now"  ? { color: "#FB7019" } : {}}
                                                 className="icon ni ni-chat-circle-fill"></em></span>
                                            <span className="nk-menu-text">Chat Anything!</span>
                                        </NavLink>
                                    </li>
                                    <li className="nk-menu-item">
                                    <NavLink to="/load-chat"
                                            style={pathname === "/load-chat" ? { color: "#FB7019" } : {}}
                                            className="nk-menu-link">
                                            <span className="nk-menu-icon"><em style={pathname == "/load-chat" ? { color: "#FB7019" } : {}} className="icon  ni ni-book-fill"></em></span>
                                            <span className="nk-menu-text" >Chat Topic</span>
                                        </NavLink>
                                    </li>
                                    <li className="nk-menu-item">
                                    <NavLink to="/upload-chat"
                                            style={pathname === "/upload-chat" ? { color: "#FB7019" } : {}}
                                            className="nk-menu-link">
                                            <span className="nk-menu-icon"><em style={pathname == "/upload-chat" ? { color: "#FB7019" } : {}}
                                             className="icon ni ni-book-fill"></em></span>
                                            <span className="nk-menu-text" >Load Data</span>
                                        </NavLink>
                                    </li>
                                {/* </ul>
                            </li> */}
                            {/* <li className="nk-menu-item">
                                <NavLink to="/chat-superstar"
                                    style={pathname === "/chat-superstar" ? { color: "#FB7019" } : {}}
                                    className="nk-menu-link">
                                    <span className="nk-menu-icon"><em style={pathname == "/chat-superstar" ? { color: "#FB7019" } : {}} className="icon ni ni-notice"></em></span><span className="nk-menu-text">DataSmith</span>
                                </NavLink>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}