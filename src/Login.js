
function Login(){
    return (
<div class="row justify-content-center">
  <div class="col-md-6 p-3">
    <h2 class="titles">LOGIN</h2>

    <form class="form login-form">
      <div class="form-group">
        <label for="email-login">Username: </label>
        <br />
        <input class="form-input" type="text" id="email-login" />
      </div>

      <div class="form-group mb-3">
        <label for="password-login">Password: </label>
        <br />
        <input class="form-input" type="password" id="password-login" />
      </div>

      <div class="form-group mb-3">
        <button class="btn btn-lg login-btn" type="submit">Login</button>
      </div>
    </form>
  </div>
</div>
    )
}

export default Login;