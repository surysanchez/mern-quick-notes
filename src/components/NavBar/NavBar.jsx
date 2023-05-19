import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import Button from 'react-bootstrap/Button';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
       <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Button Link to="" onClick={handleLogOut} >LOG OUT</Button> 
    </nav>
  );
}