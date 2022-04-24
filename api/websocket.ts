//@ts-nocheck
// const ws = new WebSocket('ws://192.168.0.102:8080/');
// ws.onopen = () => {
//   ws.send('something');
// };

// ws.onmessage = (e) => {
//   // a message was received
//   console.log(e.data);
// };
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

var socket = new SockJS('http://192.168.0.102:8080/chat');
const stompClient = Stomp.over(socket);

stompClient.connect({}, function (frame: any) {
  console.log('Connected: ' + frame);
  stompClient.subscribe('/topic/chat/1', function (messageOutput) {
    console.log(messageOutput);
    setMessages((prev: any) => [...prev, messageOutput]);
  });

  //stompClient.send('/api/chat/1', {}, JSON.stringify({ from: 'a', text: 'asd' }));
});
// var Stomp = require('@stomp/stompjs');
// import * as SockJS from 'sockjs-client';

// var sock = new SockJS('https://192.168.0.102:8080/');

// console.log(sock);

// sock.onopen = function () {
//   console.log('open');
//   sock.send({ data: 'message' });
// };

// sock.onmessage = function (e) {
//   console.log('message', e.data);
//   sock.close();
// };

// sock.onclose = function () {
//   console.log('close');
// };

export default stompClient;
