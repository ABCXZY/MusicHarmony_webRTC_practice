package prototo.tt.handler;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Component
public class SocketHandler extends TextWebSocketHandler {

    List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

    //서버로 메시지(시그널) 들어오면, 세션 검증 후, 메시지 보냄.
    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws InterruptedException, IOException {
        for(WebSocketSession webSocketSession : sessions) {
            if(webSocketSession.isOpen() && !session.getId().equals(webSocketSession.getId())){
                webSocketSession.sendMessage(message);
            }
        }
    }

    //연결이 완료되면, sessions리스트에 연결된 세션 등록.
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        sessions.add(session);
    }
}
