import React, { useState } from "react";
import "./loginScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../../redux/slice/usersSlice";
import { setLogUser, setOnline } from "../../redux/slice/logUserSlice";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (type) {
      const user = users.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        dispatch(setLogUser(user));
        dispatch(setOnline(true));
        alert("Giriş yapıldı");
        setPassword("");
        setUsername("");
        navigate("/");
      } else {
        alert("Kullanıcı adı veya şifre hatalı");
      }
    } else {
      dispatch(addUsers({ username, password }));
      alert("Kayıt olundu");
      setPassword("");
      setUsername("");
      setType(true);
    }
  };
  const handleType = (e) => {
    if (e.target.id === "true") {
      setType(true);
    } else {
      setType(false);
    }
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="log-type-cont">
          <button
            onClick={handleType}
            id="true"
            className={`log-type-btn ${type ? "log-type-btn-t" : ""}`}
          >
            Giriş yap
          </button>
          <button
            onClick={handleType}
            id="false"
            className={`log-type-btn ${type ? "" : "log-type-btn-t"}`}
          >
            Kayıt Ol
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="login-label">Kullanıcı Adı:</label>
            <input
              className="login-input"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="login-label">Şifre:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input"
            />
          </div>
          <button className="login-btn" type="submit">
            {type ? "Giriş Yap" : "Kayıt Ol"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
