import './App.css';
import SockJS from 'sockjs-client'
import Stomp from 'stomp-websocket'
import Stom from '@stomp/stompjs'

function App() {
    const connet = () => {
        // var ws = new SockJS("localhost:8080/replyEcho?bno=1234")
        var ws = new SockJS("ws://localhost:8080/replyEcho?bno=1234");
        var stompClient = Stomp.over(ws)

        stompClient.connect({}, function (fame) {
            // setConnect(true);
            console.log('Conneted: '+ fame);
            stompClient.subscribe('/topic/greetings', function (greeting) {
                console.log(JSON.parse(greeting.body).content);
            })
        })
    }


  return (
      <>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>

          <button onClick={wsButtonClick}>TestBUTTON</button>
      </>
  );
}

export default App;
