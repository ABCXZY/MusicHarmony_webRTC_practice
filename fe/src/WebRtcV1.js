// https://surprisecomputer.tistory.com/9?category=909008 참고.
import {useRef, useState} from "react";


const WebRtcv1 = () => {

    const [pc, setPc] = useState(); //RTCPeerConnetion. <RTCPeerConnection>
    const [socket, setSocket] = useState() // 시그널링 서버와 통신할 소켓

    let localVideoRef = useRef(null) //본인의 video, audio를 재생할 video 태그의 ref
    let remoteVideoRef = useRef(null) //상대방의 video, audio를 재생할 video 태그의 ref

    const pc_config = {  // RTCPeerConnection을 생성할 때의 config
        "iceServers":[{
            urls: 'stun:localhost:8080'
        }]
    }
    return (
        <>

        </>
    )
}

export default WebRtcv1;