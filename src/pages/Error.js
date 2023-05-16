function Error() {
    return (
      <div class="row justify-content-center">
        <div class="col-md-6 p-3">
          <h2 class="titles">Login Error</h2>
            <div>
                  <h1>Login Unsuccessful! Please try again</h1>
            </div>
  
            <div class="form-group mb-3"> 
              Click here to go back to login page
              <button class="btn btn-lg login-btn" type="submit">
                Back to Login Page
              </button>
            </div>
        </div>
      </div>
    );
  }

  export default Error;