function LoginSuccess() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6 p-3">
        <h2 className="titles">Login Success!</h2>
        <div>
          <h1>Welcome! You have successfully logged in!</h1>
        </div>

        <div className="form-group mb-3">
          Click here to sign out
          <button className="btn btn-lg login-btn" type="submit">
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginSuccess;
