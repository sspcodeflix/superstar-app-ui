import './App.css';
import { Header } from './Webpages/Header';
import { SideBar } from './Webpages/SideBar';
import { ContentBox } from './Webpages/ContentBox';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChatwithSuper } from './Webpages/SuperStartchat';
import Login from './Webpages/Auth/Login';
import Register from './Webpages/Auth/Register';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from './config/Commen';
import ForgotPassword from './Webpages/Auth/ForgotPassword';
import VerifyEmail from './Webpages/Auth/VerifyEmail';
import { UploadNowChat } from './Webpages/UploadNowChat';
import { NowChat } from './Webpages/NowChat';
import { LoadDataChat } from './Webpages/LoadDataChat';
import PrivateRoute from './Webpages/Auth/private_route';



function App() {

  return (
    <Router>
      <>
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <ToastContainer
            position="top-center"
          />
          {window.location.pathname == "/login" || window.location.pathname == "/register" || window.location.pathname == "/" ? "" : <SideBar />}
          <div className="nk-wrap ">
            {window.location.pathname == "/login" || window.location.pathname == "/register" || window.location.pathname == "/" ? "" : <Header pathname={window.location} />}
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/verify-email" element={<VerifyEmail />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              {/* <Route path="/chat" element={<FileUploader />} /> */}
              {/* <Route path="/chat-now" element={<PrivateRoute element={ <NowChat />}/>} /> */}
              <Route path="/chat-now" element={<NowChat />} />
              <Route path="/load-chat" element={<LoadDataChat />} />
              <Route path="/upload-chat" element={<UploadNowChat />} />
              <Route path="/chat-superstar" element={<ChatwithSuper />} />
            </Routes>
          </div>
        </GoogleOAuthProvider>
      </>
    </Router>
  );
}

export default App;
