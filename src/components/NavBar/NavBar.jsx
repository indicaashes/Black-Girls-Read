import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/home">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/books">Books</Link>
      &nbsp; | &nbsp;
      <Link to="/forums">Community Forum</Link>
      &nbsp; | &nbsp;
      <Link to="/profile">My Profile</Link>
      &nbsp; | &nbsp;
      <span>Welcome Back Sis!</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}