import { Stomp } from '@stomp/stompjs';
//@ts-ignore
import * as SockJS from 'sockjs-client';

var socket = new SockJS('http://192.168.0.102:8080/chat');
const stompClient = Stomp.over(socket);

stompClient.connect({}, function (frame: any) {});
export default stompClient;
