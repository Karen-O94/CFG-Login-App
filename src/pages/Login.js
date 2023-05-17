import React, {useState} from 'react';

function Login(){
  //storing login values as states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  }
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
        <button className="btn btn-lg login-btn" type="submit">Login</button>
      </div>
    </form>
  </div>
</div>
    )
}

export default Login;