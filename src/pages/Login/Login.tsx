import './Login.scss';
import { socket } from '../../socket';

function Login() {
  function emitMessage() {
    socket.emit("message", { "action": "test" });
  }

  return (
    <div id="login">
      <button onClick={() => emitMessage()}>test</button>
    </div>
  );
}

export { Login };
