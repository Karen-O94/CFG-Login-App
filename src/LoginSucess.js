function Logout() {
  return (
    <div class="row justify-content-center">
      <div class="col-md-6 p-3">
        <h2 class="titles">Login Success!</h2>
          <div>
                <h1>Welcome! You have successfully logged in!</h1>
          </div>

          <div class="form-group mb-3"> 
            Click here to sign out
            <button class="btn btn-lg login-btn" type="submit">
              LogOut
            </button>
          </div>
      </div>
    </div>
  );
}
