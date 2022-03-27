import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <Router>
      <div className="App">
        <Header user={user} onLogout={handleLogout} />
        <Switch>
          <Route exact path="/login">
            <Login onLogin={handleLogin} user={user} />
          </Route>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route exact path="logout"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
