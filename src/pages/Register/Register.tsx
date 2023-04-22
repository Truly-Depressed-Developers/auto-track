import './Register.scss';
import { socket } from '../../socket';
import { useContext, useState, useEffect } from "react";
import { MyContextRegister } from '../../App';
import { sha256 } from 'js-sha256';

function Register() {
  const [usernameParent, setUsernameParent] = [useContext(MyContextRegister)?.username, useContext(MyContextRegister)?.setUsername];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState<string>();

  function updatePassword(passwd: string) {
    if (passwd !== "") {
      let hasher = sha256.create()
      hasher.update(passwd);
      setPassword(hasher.hex());
    }
  }

  function attemptRegister() {
    if (password && username) {
      socket.emit("register", { "username": username, "password": password });
    } else {
      alert("Password or username cannot be empty!");
    }
  }

  useEffect(() => {
    socket.on('registerResult', (data) => {
      setUsernameParent ? setUsernameParent(username) : console.log("bad");
    });
  }, [password])


  return (
    <div id="register">
      <label htmlFor="login">Login</label>
      <input id="inputLogin" type="text" value={username} onChange={(e) => { setUsername ? setUsername(e.target.value) : console.warn("setter doesn't work") }} />

      <label htmlFor="password">Password</label>
      <input id="inputPassword" type="password" onChange={(e) => { updatePassword ? updatePassword(e.target.value) : console.warn("setter doesn't work") }} />

      <button onClick={() => attemptRegister()}>Register</button>
    </div>
  );
}

export { Register };
