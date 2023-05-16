import './App.css';
import Login from './pages/Login.js';
import LoginSuccess from './pages/LoginSuccess.js';
import Error from './pages/Error.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" component={Login}/>
            <Route exact path="/success" component={LoginSuccess}/>
            <Route exact path="/error" component={Error}/>
          </Routes>
        </Router>
        <Login />
      </header>
    </div>
  );
}

export default App;
