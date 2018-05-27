import { webSocket } from "rxjs/webSocket";
import { WebSocketSubject } from "rxjs/observable/dom/WebSocketSubject";
import { fullObserver } from "./utils";
import { ajax } from "rxjs/ajax";

function webSocketTest() {
  const wsUri = "wss://echo.websocket.org/";

  const socket$: WebSocketSubject<string> = webSocket(wsUri);
  socket$.subscribe(fullObserver('webSocketTest RECEIVED'));

  console.log('SEND');
  socket$.next('hello imba!')
}

function ajaxTest() {
  ajax.getJSON('http://localhost:4100/api/todos')
    .subscribe(fullObserver('ajaxTest'));
}

export function ajaxWebSocketTaskApp() {
  // ajaxTest();
  // webSocketTest();
}
