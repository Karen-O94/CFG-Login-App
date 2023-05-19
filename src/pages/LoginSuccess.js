import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

//LoginSuccess route to be displayed when user is logged in
function LoginSuccess() {
  const [validated, setValidation] = useState(null)
  useEffect (() => {
    const userIsLoggedIn = localStorage.getItem("validated");
    if (userIsLoggedIn) {
      setValidated(userIsLoggedIn)
    }
  }, []);

  //If user is not logged in, they will need to be redirected to Login (Home page)
  if (!validated) {
    return <Navigate replace to="/"/>
  } else {
    return (
      <div className="row justify-content-center">
        <div className="col-md-6 p-3">
          <h2 className="titles">Login Success!</h2>
          <div>
            <h1>Welcome! You have successfully logged in!</h1>
          </div>
  
          <div className="form-group mb-3">
            <h5>Click here to sign out</h5>
            <button className="btn btn-lg btn-danger logout-btn" type="submit">
              LogOut
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default LoginSuccess;
