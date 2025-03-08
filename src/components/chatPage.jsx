import React, { useState } from "react";
import classNames from "classnames";

// Componnet to display the chat page

export const ChatPage = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const buttonClasses = classNames("collapsible-button btn btn-primary", {
    collapsed: isCollapsed,
  });

  const contentClasses = classNames("collapsible-content", {
    hidden: isCollapsed,
  });

  const containerClasses = classNames("nk-chat-profile visible", {
    favChat: isCollapsed,
  });

  const mainContClasses = classNames("nk-chat-body profile-shown", {
    collapseCont: isCollapsed,
  });

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div class="nk-chat nk-chat-page">
      <div className={mainContClasses}>
          <div class="nk-chat-head">
            <ul class="nk-chat-head-info">
              <li class="nk-chat-body-close">
                <a href="/" class="btn btn-icon btn-trigger nk-chat-hide ms-n1">
                  <em class="icon ni ni-arrow-left"></em>
                </a>
              </li>
              <li class="nk-chat-head-user">
                <div class="user-card">
                  <div class="user-avatar bg-purple">
                    <span>IH</span>
                  </div>
                  <div class="user-info">
                    <div class="lead-text">Iliash Hossain</div>
                    <div class="sub-text">
                      <span class="d-none d-sm-inline me-1">Active </span> 35m ago
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="nk-models">
          <div class="dropdown">
            <a
              class="btn btn-primary dropdown-toggle"
              href="/"
              type="button"
              data-bs-toggle="dropdown"
            >
              Models <span class="arrow-down"></span>
            </a>
            <div class="dropdown-menu">
              <ul class="link-list-opt">
                <li>
                  <a href="/">
                    <span>Model 1</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>Model 2</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>Model 3</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
            <div class="nk-chat-head-search">
              <div class="form-group">
                <div class="form-control-wrap">
                  <div class="form-icon form-icon-left">
                    <em class="icon ni ni-search"></em>
                  </div>
                  <input
                    type="text"
                    class="form-control form-round"
                    id="chat-search"
                    placeholder="Search in Conversation"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="nk-chat-panel" data-simplebar>
            <div class="chat is-you">
              <div class="chat-avatar">
                <div class="user-avatar bg-purple">
                  <span>IH</span>
                </div>
              </div>
              <div class="chat-content">
                <div class="chat-bubbles">
                  <div class="chat-bubble">
                    <div class="chat-msg"> Hello! </div>
                    <ul class="chat-msg-more">
                      <li class="d-none d-sm-block">
                        <a href="/" class="btn btn-icon btn-sm btn-trigger">
                          <em class="icon ni ni-reply-fill"></em>
                        </a>
                      </li>
                      <li>
                        <div class="dropdown">
                          <a
                            href="/"
                            class="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <em class="icon ni ni-more-h"></em>
                          </a>
                          <div class="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                            <ul class="link-list-opt no-bdr">
                              <li class="d-sm-none">
                                <a href="/">
                                  <em class="icon ni ni-reply-fill"></em> Reply
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-pen-alt-fill"></em> Edit
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-trash-fill"></em> Remove
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="chat-bubble">
                    <div class="chat-msg">
                      {" "}
                      I found an issues when try to purchase the product.{" "}
                    </div>
                    <ul class="chat-msg-more">
                      <li class="d-none d-sm-block">
                        <a href="/" class="btn btn-icon btn-sm btn-trigger">
                          <em class="icon ni ni-reply-fill"></em>
                        </a>
                      </li>
                      <li>
                        <div class="dropdown">
                          <a
                            href="/"
                            class="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <em class="icon ni ni-more-h"></em>
                          </a>
                          <div class="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                            <ul class="link-list-opt no-bdr">
                              <li class="d-sm-none">
                                <a href="/">
                                  <em class="icon ni ni-reply-fill"></em> Reply
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-pen-alt-fill"></em> Edit
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-trash-fill"></em> Remove
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul class="chat-meta">
                  <li>Iliash Hossain</li>
                  <li>29 Apr, 2020 4:28 PM</li>
                </ul>
              </div>
            </div>
            <div class="chat is-me">
              <div class="chat-content">
                <div class="chat-bubbles">
                  <div class="chat-bubble">
                    <div class="chat-msg">
                      {" "}
                      Thanks for inform. We just solved the issues. Please check
                      now.{" "}
                    </div>
                    <ul class="chat-msg-more">
                      <li class="d-none d-sm-block">
                        <a href="/" class="btn btn-icon btn-sm btn-trigger">
                          <em class="icon ni ni-reply-fill"></em>
                        </a>
                      </li>
                      <li>
                        <div class="dropdown">
                          <a
                            href="/"
                            class="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <em class="icon ni ni-more-h"></em>
                          </a>
                          <div class="dropdown-menu dropdown-menu-sm">
                            <ul class="link-list-opt no-bdr">
                              <li class="d-sm-none">
                                <a href="/">
                                  <em class="icon ni ni-reply-fill"></em> Reply
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-pen-alt-fill"></em> Edit
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-trash-fill"></em> Remove
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul class="chat-meta">
                  <li>Abu Bin Ishtiyak</li>
                  <li>29 Apr, 2020 4:12 PM</li>
                </ul>
              </div>
            </div>
            <div class="chat is-you">
              <div class="chat-avatar">
                <div class="user-avatar bg-purple">
                  <span>IH</span>
                </div>
              </div>
              <div class="chat-content">
                <div class="chat-bubbles">
                  <div class="chat-bubble">
                    <div class="chat-msg"> This is really cool. </div>
                    <ul class="chat-msg-more">
                      <li class="d-none d-sm-block">
                        <a href="/" class="btn btn-icon btn-sm btn-trigger">
                          <em class="icon ni ni-reply-fill"></em>
                        </a>
                      </li>
                      <li>
                        <div class="dropdown">
                          <a
                            href="/"
                            class="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <em class="icon ni ni-more-h"></em>
                          </a>
                          <div class="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                            <ul class="link-list-opt no-bdr">
                              <li class="d-sm-none">
                                <a href="/">
                                  <em class="icon ni ni-reply-fill"></em> Reply
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-pen-alt-fill"></em> Edit
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-trash-fill"></em> Remove
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="chat-bubble">
                    <div class="chat-msg">
                      {" "}
                      It’s perfect. Thanks for letting me know.{" "}
                    </div>
                    <ul class="chat-msg-more">
                      <li class="d-none d-sm-block">
                        <a href="/" class="btn btn-icon btn-sm btn-trigger">
                          <em class="icon ni ni-reply-fill"></em>
                        </a>
                      </li>
                      <li>
                        <div class="dropdown">
                          <a
                            href="/"
                            class="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <em class="icon ni ni-more-h"></em>
                          </a>
                          <div class="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                            <ul class="link-list-opt no-bdr">
                              <li class="d-sm-none">
                                <a href="/">
                                  <em class="icon ni ni-reply-fill"></em> Reply
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-pen-alt-fill"></em> Edit
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-trash-fill"></em> Remove
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul class="chat-meta">
                  <li>Iliash Hossain</li>
                  <li>29 Apr, 2020 4:28 PM</li>
                </ul>
              </div>
            </div>
            <div class="chat-sap">
              <div class="chat-sap-meta">
                <span>12 May, 2020</span>
              </div>
            </div>
            <div class="chat is-you">
              <div class="chat-avatar">
                <div class="user-avatar bg-purple">
                  <span>IH</span>
                </div>
              </div>
              <div class="chat-content">
                <div class="chat-bubbles">
                  <div class="chat-bubble">
                    <div class="chat-msg">
                      {" "}
                      Hey, I am facing problem as i can not login into
                      application. Can you help me to reset my password?{" "}
                    </div>
                    <ul class="chat-msg-more">
                      <li class="d-none d-sm-block">
                        <a href="/" class="btn btn-icon btn-sm btn-trigger">
                          <em class="icon ni ni-reply-fill"></em>
                        </a>
                      </li>
                      <li>
                        <div class="dropdown">
                          <a
                            href="/"
                            class="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <em class="icon ni ni-more-h"></em>
                          </a>
                          <div class="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                            <ul class="link-list-opt no-bdr">
                              <li class="d-sm-none">
                                <a href="/">
                                  <em class="icon ni ni-reply-fill"></em> Reply
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-pen-alt-fill"></em> Edit
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-trash-fill"></em> Remove
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul class="chat-meta">
                  <li>3:49 PM</li>
                </ul>
              </div>
            </div>
            <div class="chat is-me">
              <div class="chat-content">
                <div class="chat-bubbles">
                  <div class="chat-bubble">
                    <div class="chat-msg">
                      {" "}
                      Definately. We are happy to help you.{" "}
                    </div>
                    <ul class="chat-msg-more">
                      <li class="d-none d-sm-block">
                        <a href="/" class="btn btn-icon btn-sm btn-trigger">
                          <em class="icon ni ni-reply-fill"></em>
                        </a>
                      </li>
                      <li>
                        <div class="dropdown">
                          <a
                            href="/"
                            class="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <em class="icon ni ni-more-h"></em>
                          </a>
                          <div class="dropdown-menu dropdown-menu-sm">
                            <ul class="link-list-opt no-bdr">
                              <li class="d-sm-none">
                                <a href="/">
                                  <em class="icon ni ni-reply-fill"></em> Reply
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-pen-alt-fill"></em> Edit
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-trash-fill"></em> Remove
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul class="chat-meta">
                  <li>3:55 PM</li>
                </ul>
              </div>
            </div>
            <div class="chat is-you">
              <div class="chat-avatar">
                <div class="user-avatar bg-purple">
                  <span>IH</span>
                </div>
              </div>
              <div class="chat-content">
                <div class="chat-bubbles">
                  <div class="chat-bubble">
                    <div class="chat-msg">
                      {" "}
                      Thank you! Let me know when it done.{" "}
                    </div>
                    <ul class="chat-msg-more">
                      <li class="d-none d-sm-block">
                        <a href="/" class="btn btn-icon btn-sm btn-trigger">
                          <em class="icon ni ni-reply-fill"></em>
                        </a>
                      </li>
                      <li>
                        <div class="dropdown">
                          <a
                            href="/"
                            class="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <em class="icon ni ni-more-h"></em>
                          </a>
                          <div class="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                            <ul class="link-list-opt no-bdr">
                              <li class="d-sm-none">
                                <a href="/">
                                  <em class="icon ni ni-reply-fill"></em> Reply
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-pen-alt-fill"></em> Edit
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-trash-fill"></em> Remove
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul class="chat-meta">
                  <li>3:49 PM</li>
                </ul>
              </div>
            </div>
            <div class="chat is-me">
              <div class="chat-content">
                <div class="chat-bubbles">
                  <div class="chat-bubble">
                    <div class="chat-msg">
                      {" "}
                      We just reset your account. Please check your email for
                      verification.{" "}
                    </div>
                    <ul class="chat-msg-more">
                      <li class="d-none d-sm-block">
                        <a href="/" class="btn btn-icon btn-sm btn-trigger">
                          <em class="icon ni ni-reply-fill"></em>
                        </a>
                      </li>
                      <li>
                        <div class="dropdown">
                          <a
                            href="/"
                            class="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <em class="icon ni ni-more-h"></em>
                          </a>
                          <div class="dropdown-menu dropdown-menu-sm">
                            <ul class="link-list-opt no-bdr">
                              <li class="d-sm-none">
                                <a href="/">
                                  <em class="icon ni ni-reply-fill"></em> Reply
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-pen-alt-fill"></em> Edit
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-trash-fill"></em> Remove
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="chat-bubble">
                    <div class="chat-msg"> Please confirm if your got email </div>
                    <ul class="chat-msg-more">
                      <li class="d-none d-sm-block">
                        <a href="/" class="btn btn-icon btn-sm btn-trigger">
                          <em class="icon ni ni-reply-fill"></em>
                        </a>
                      </li>
                      <li>
                        <div class="dropdown">
                          <a
                            href="/"
                            class="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <em class="icon ni ni-more-h"></em>
                          </a>
                          <div class="dropdown-menu dropdown-menu-sm">
                            <ul class="link-list-opt no-bdr">
                              <li class="d-sm-none">
                                <a href="/">
                                  <em class="icon ni ni-reply-fill"></em> Reply
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-pen-alt-fill"></em> Edit
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <em class="icon ni ni-trash-fill"></em> Remove
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul class="chat-meta">
                  <li>
                    <span>Now</span>{" "}
                    <em class="icon ni ni-check-circle-fill"></em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="nk-chat-editor">
            <div class="nk-chat-editor-upload  ms-n1">
              <a
                href="/"
                class="btn btn-sm btn-icon btn-trigger text-primary toggle-opt"
                data-target="chat-upload"
              >
                <em class="icon ni ni-plus-circle-fill"></em>
              </a>
              <div class="chat-upload-option" data-content="chat-upload">
                <ul class="">
                  <li>
                    <a href="/">
                      <em class="icon ni ni-img-fill"></em>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <em class="icon ni ni-camera-fill"></em>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <em class="icon ni ni-mic"></em>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <em class="icon ni ni-grid-sq"></em>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nk-chat-editor-form">
              <div class="form-control-wrap">
                <textarea
                  class="form-control form-control-simple no-resize"
                  rows="1"
                  id="default-textarea"
                  placeholder="Type your message..."
                ></textarea>
              </div>
            </div>
            <ul class="nk-chat-editor-tools g-2">
              <li>
                <a href="/" class="btn btn-sm btn-icon btn-trigger text-primary">
                  <em class="icon ni ni-happyf-fill"></em>
                </a>
              </li>
              <li>
                <button class="btn btn-round btn-primary btn-icon">
                  <em class="icon ni ni-send-alt"></em>
                </button>
              </li>
            </ul>
          </div>
        <div className={containerClasses}>
          <button className={buttonClasses} onClick={toggleCollapse}>
            {isCollapsed ? <em className="icon ni ni-menu"></em> : "Hide"}
          </button>
          <div className={contentClasses}>
            <div class="nk-chat-aside-body" data-simplebar>
              <div class="nk-chat-aside-search">
                <div class="form-group">
                  <div class="form-control-wrap">
                    <div class="form-icon form-icon-left">
                      <em class="icon ni ni-search"></em>
                    </div>
                    <input
                      type="text"
                      class="form-control form-round"
                      id="default-03"
                      placeholder="Search by name"
                    />
                  </div>
                </div>
              </div>
              <div class="nk-chat-list">
                <h6 class="title overline-title-alt">Messages</h6>
                <ul class="chat-list">
                  <li class="chat-item">
                    <a class="chat-link chat-open" href="/">
                      <div class="chat-media user-avatar bg-purple">
                        <span>IH</span>
                        <span class="status dot dot-lg dot-gray"></span>
                      </div>
                      <div class="chat-info">
                        <div class="chat-from">
                          <div class="name">Iliash Hossain</div>
                          <span class="time">Now</span>
                        </div>
                        <div class="chat-context">
                          <div class="text">
                            <p>
                              You: Please confrim if you got my last messages.
                            </p>
                          </div>
                          <div class="status delivered">
                            <em class="icon ni ni-check-circle-fill"></em>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div class="chat-actions">
                      <div class="dropdown">
                        <a
                          href="/"
                          class="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <em class="icon ni ni-more-h"></em>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <ul class="link-list-opt no-bdr">
                            <li>
                              <a href="/">Mute</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                              <a href="/">Hide</a>
                            </li>
                            <li>
                              <a href="/">Delete</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                              <a href="/">Mark as Unread</a>
                            </li>
                            <li>
                              <a href="/">Ignore Messages</a>
                            </li>
                            <li>
                              <a href="/">Block Messages</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="chat-item is-unread">
                    <a class="chat-link chat-open" href="/">
                      <div class="chat-media user-avatar">
                        <span>AB</span>
                        <span class="status dot dot-lg dot-gray"></span>
                      </div>
                      <div class="chat-info">
                        <div class="chat-from">
                          <div class="name">Abu Bin Ishtiyak</div>
                          <span class="time">4:49 AM</span>
                        </div>
                        <div class="chat-context">
                          <div class="text">
                            <p>
                              Hi, I am Ishtiyak, can you help me with this
                              problem ?
                            </p>
                          </div>
                          <div class="status unread">
                            <em class="icon ni ni-bullet-fill"></em>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div class="chat-actions">
                      <div class="dropdown">
                        <a
                          href="/"
                          class="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <em class="icon ni ni-more-h"></em>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <ul class="link-list-opt no-bdr">
                            <li>
                              <a href="/">Mute</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                              <a href="/">Hide</a>
                            </li>
                            <li>
                              <a href="/">Delete</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                              <a href="/">Mark as Unread</a>
                            </li>
                            <li>
                              <a href="/">Ignore Messages</a>
                            </li>
                            <li>
                              <a href="/">Block Messages</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="chat-item">
                    <a class="chat-link chat-open" href="/">
                      <div class="chat-media user-avatar">
                        <img src="./images/avatar/b-sm.jpg" alt="" />
                      </div>
                      <div class="chat-info">
                        <div class="chat-from">
                          <div class="name">George Philips</div>
                          <span class="time">6 Apr</span>
                        </div>
                        <div class="chat-context">
                          <div class="text">
                            <p>Have you seens the claim from Rose?</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div class="chat-actions">
                      <div class="dropdown">
                        <a
                          href="/"
                          class="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <em class="icon ni ni-more-h"></em>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <ul class="link-list-opt no-bdr">
                            <li>
                              <a href="/">Mute</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                              <a href="/">Hide</a>
                            </li>
                            <li>
                              <a href="/">Delete</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                              <a href="/">Mark as Unread</a>
                            </li>
                            <li>
                              <a href="/">Ignore Messages</a>
                            </li>
                            <li>
                              <a href="/">Block Messages</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="chat-item">
                    <a class="chat-link chat-open" href="/">
                      <div class="chat-media user-avatar">
                        <img src="./images/avatar/a-sm.jpg" alt="" />
                        <span class="status dot dot-lg dot-success"></span>
                      </div>
                      <div class="chat-info">
                        <div class="chat-from">
                          <div class="name">Larry Hughes</div>
                          <span class="time">3 Apr</span>
                        </div>
                        <div class="chat-context">
                          <div class="text">
                            <p>Hi Frank! How is you doing?</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div class="chat-actions">
                      <div class="dropdown">
                        <a
                          href="/"
                          class="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <em class="icon ni ni-more-h"></em>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <ul class="link-list-opt no-bdr">
                            <li>
                              <a href="/">Mute</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                              <a href="/">Hide</a>
                            </li>
                            <li>
                              <a href="/">Delete</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                              <a href="/">Mark as Unread</a>
                            </li>
                            <li>
                              <a href="/">Ignore Messages</a>
                            </li>
                            <li>
                              <a href="/">Block Messages</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="chat-item">
                    <a class="chat-link chat-open" href="/">
                      <div class="chat-media user-avatar">
                        <span>TW</span>
                      </div>
                      <div class="chat-info">
                        <div class="chat-from">
                          <div class="name">Tammy Wilson</div>
                          <span class="time">27 Mar</span>
                        </div>
                        <div class="chat-context">
                          <div class="text">
                            <p>
                              You: I just bought a new computer but i am having
                              some problem
                            </p>
                          </div>
                          <div class="status sent">
                            <em class="icon ni ni-check-circle"></em>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div class="chat-actions">
                      <div class="dropdown">
                        <a
                          href="/"
                          class="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <em class="icon ni ni-more-h"></em>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <ul class="link-list-opt no-bdr">
                            <li>
                              <a href="/">Mute</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                              <a href="/">Hide</a>
                            </li>
                            <li>
                              <a href="/">Delete</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                              <a href="/">Mark as Unread</a>
                            </li>
                            <li>
                              <a href="/">Ignore Messages</a>
                            </li>
                            <li>
                              <a href="/">Block Messages</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="chat-item">
                    <a class="chat-link chat-open" href="/">
                      <div class="chat-media user-avatar user-avatar-multiple">
                        <div class="user-avatar">
                          <img src="./images/avatar/c-sm.jpg" alt="" />
                        </div>
                        <div class="user-avatar">
                          <span>AB</span>
                        </div>
                      </div>
                      <div class="chat-info">
                        <div class="chat-from">
                          <div class="name">Softnio Group</div>
                          <span class="time">27 Mar</span>
                        </div>
                        <div class="chat-context">
                          <div class="text">
                            <p>
                              You: I just bought a new computer but i am having
                              some problem
                            </p>
                          </div>
                          <div class="status sent">
                            <em class="icon ni ni-check-circle"></em>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div class="chat-actions">
                      <div class="dropdown">
                        <a
                          href="/"
                          class="btn btn-icon btn-sm btn-trigger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <em class="icon ni ni-more-h"></em>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <ul class="link-list-opt no-bdr">
                            <li>
                              <a href="/">Mute</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                              <a href="/">Hide</a>
                            </li>
                            <li>
                              <a href="/">Delete</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                              <a href="/">Mark as Unread</a>
                            </li>
                            <li>
                              <a href="/">Ignore Messages</a>
                            </li>
                            <li>
                              <a href="/">Block Messages</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
