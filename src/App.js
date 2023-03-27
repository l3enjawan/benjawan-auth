import auth from "./firebase_config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Student from "./components/Student";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Swal from "sweetalert2";
import PageNotFound from "./components/PageNotFound";
import Tel from "./components/Tel";
import Edit from "./components/edit";

const App = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("onAuth", user);
        setUserInfo(user);
      } else {
        setUserInfo(null);
      }
    });
  }, []);

  const logout = () => {
    signOut(auth)
      .then(function () {
        Swal.fire("Logged out!!!");
      })
      .catch((error) => {
        Swal.fire(error);
      });
  };

  const login = () => {
    const provider = new GoogleAuthProvider();
    auth.useDeviceLanguage();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("SignIn: ", result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  };

  return (
    <div className="boxcontent">
      <div className="card">
        <br />
        <div className="card">
          <h1>
            <center>Google Authentication</center>
          </h1>
        </div>
        <br />
        <BrowserRouter>
          <Menu />
          <Header user={userInfo} login={login} logout={logout} />
          <Routes>
            <Route path="/" element={<Home user={userInfo} />} />
            <Route path="/std" element={<Student user={userInfo} />} />
            <Route path="/stp" element={<Tel user={userInfo} />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
