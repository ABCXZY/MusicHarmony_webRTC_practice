import './App.css';
import SockJS from 'sockjs-client'
import Stomp from 'stomp-websocket'

function App() {

    function connect() {
        var socket = new SockJS('/gs-guide-websocket');
        var stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/greetings', function (greeting) {
                showGreeting(JSON.parse(greeting.body).content);
            });
        });
    }

    function showGreeting(message) {
        console.log("<tr><td>" + message + "</td></tr>");
    }

  return (
      <>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>

      </>
  );
}

export default App;
