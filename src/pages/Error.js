function Error() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-6 p-3">
          <h2 className="titles">Login Error</h2>
            <div>
                  <h1>Login Unsuccessful! Please try again</h1>
            </div>
  
            <div className="form-group mb-3"> 
              Click here to go back to login page
              <button className="btn btn-lg login-btn" type="submit">
                Back to Login Page
              </button>
            </div>
        </div>
      </div>
    );
  }

  export default Error;