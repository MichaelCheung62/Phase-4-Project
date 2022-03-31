import { Link } from 'react-router-dom';

function Header({ user, onLogout }) {
  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE',
    }).then(() => onLogout());
  }
  return (
    <header>
      <div id="heading">
        <Link to="/">NAI CHAI</Link>
      </div>
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
        <Link id="login" to="/login">Click Here to Login</Link>
      )}
    </header>
  );
}

export default Header;
