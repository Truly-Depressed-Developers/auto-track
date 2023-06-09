import './Login.scss';
import { socket } from '../../socket';
import { useContext, useState, useEffect } from "react";
import { MyContextLogin } from '../../App';
import { sha256 } from 'js-sha256';

function Login() {
  const [usernameParent, setUsernameParent] = [useContext(MyContextLogin)?.username, useContext(MyContextLogin)?.setUsername];
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = [useContext(MyContextLogin)?.loggedIn, useContext(MyContextLogin)?.setLoggedIn];
  const [password, setPassword] = useState<string>();

  function updatePassword(passwd: string) {
    if (passwd !== "") {
      let hasher = sha256.create()
      hasher.update(passwd);
      setPassword(hasher.hex());
    }
  }

  function attemptLogin() {
    if (password && username) {
      socket.emit("login", { "username": username, "password": password });
    } else {
      alert("Password or username cannot be empty!");
    }
  }

  useEffect(() => {
    socket.on('loginResult', (data) => {
      if (setLoggedIn && data.success === 1) {
        setLoggedIn(data.success)
        setUsernameParent ? setUsernameParent(username) : console.log("bad");
      }
    });
  }, [password]);

  return (
    <div id="login">
      <label htmlFor="login">Login</label>
      <input id="inputLogin" type="text" value={username} onChange={(e) => { setUsername ? setUsername(e.target.value) : console.warn("setter doesn't work") }} />

      <label htmlFor="password">Password</label>
      <input id="inputPassword" type="password" onChange={(e) => { updatePassword ? updatePassword(e.target.value) : console.warn("setter doesn't work") }} />

      <button onClick={() => attemptLogin()}>Login</button>
    </div>
  );
}

export { Login };
