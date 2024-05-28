import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link    
} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Login />} exact />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;