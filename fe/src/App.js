import './App.css';
import SockJS from 'sockjs-client'
import Stomp from 'stomp-websocket'

function App() {
    var stompClient = null;

    function connect() {
        var socket = new SockJS('http://localhost:8080/gs-guide-websocket');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/greetings', function (greeting) {
                showGreeting(JSON.parse(greeting.body).content);
            });
        });
    }

    function disconnect() {
        if (stompClient !== null) {
            stompClient.disconnect();
        }
        console.log("Disconnected");
    }

    function sendName() {
        stompClient.send("/app/hello", {}, JSON.stringify({'name':'testName'}));
    }


    function showGreeting(message) {
        console.log("<tr><td>" + message + "</td></tr>");
    }

  return (
      <>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
            <button onClick={connect}>connect</button>
            <br/>
            <button onClick={sendName}>sendName</button>
            <button></button>
            <button></button>
      </>
  );
}

export default App;
