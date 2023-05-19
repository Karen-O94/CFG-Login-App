import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from "react-router-dom";
//import Welcome from './pages/Welcome';

function Login(){
  //storing login values as states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(
    localStorage.getItem(localStorage.getItem("validated")|| false));
  const clients = [{username:"jamie", password: "hello123"}];
  //const navigate = useNavigate()

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    //console.log(username, password);
    //Finds if client within clients object has a matching username
    const userInfo = clients.find((client) => client.username === username);
    // Checks to see if password from client matches with corresponding password in clients 
    //If checks are true, it stores information in locale storage
    if (userInfo && userInfo.password === password) {
      setValidated(true)
      localStorage.setItem("validated", true);
      //navigate("/welcome");
    }
  };
    return (
<div className="row justify-content-center">

  <div className="col-md-6 p-3">
    <h2 className="titles">LOGIN</h2>

    <form className="form login-form" onSubmit={handleLoginSubmit}>
      <div className="form-group">
        <label htmlfor="email-login">Username: </label>
        <br />
        <input value={username} onChange={(e) => setUsername(e.target.value)} className="form-input" type="text" id="username-login" />
      </div>

      <div className="form-group mb-3">
        <label htmlfor="password-login">Password: </label>
        <br />
        <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" placeholder="******"type="password" id="password-login" />
      </div>

      <div class="form-group mb-3">
        <button className="btn btn-lg btn-danger login-btn" type="submit">Login</button>
      </div>
    </form>
  </div>
</div>
    );
}

export default Login;