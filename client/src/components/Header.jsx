import { Link } from 'react-router-dom';

function Header({ user, onLogout }) {
  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE',
    }).then(() => onLogout());
  }
  return (
    <header>
      <h1>
        <Link to="/">Nai Chai</Link>
      </h1>
      {user ? (
        <div>
          <div>
            <Link to="/orders">Orders</Link>
          </div>
          <div>
            <Link to="/menu">Menu</Link>
          </div>

          <div>
            <p>Welcome, {user.username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      ) : (
        <Link to="/login">Click Here to Login</Link>
      )}
    </header>
  );
}

export default Header;
