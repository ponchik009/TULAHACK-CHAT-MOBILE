//@ts-nocheck

import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

var socket = new SockJS('http://192.168.0.102:8080/chat');
const stompClient = Stomp.over(socket);

stompClient.connect({}, function (frame: any) {
  stompClient.subscribe('/topic/chat/1', function (messageOutput) {
    setMessages((prev: any) => [...prev, messageOutput]);
  });
});
export default stompClient;
