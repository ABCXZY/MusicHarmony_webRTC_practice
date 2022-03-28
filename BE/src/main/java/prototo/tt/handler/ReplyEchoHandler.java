package prototo.tt.handler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Controller
public class ReplyEchoHandler extends TextWebSocketHandler {
    @GetMapping("/replyEcho")
    @Override //커넥션이 연결 되었을때  :  클라이언트가 서버에 접속을 성공했을때 콜백
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        System.out.println("afterConnectionEstablished: " +session);
    }

    @Override //소켓에 어떤 메시지를 보냈을때,
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        System.out.println("handle");
    }

    @Override //커넥션이 클로즈 됐을때,
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        System.out.println("close");
    }
}
