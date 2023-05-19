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
            <Route index element={<Login />}/>
            <Route exact path="success" element={<LoginSuccess />}/>
            <Route exact path="error" element={<Error />}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
