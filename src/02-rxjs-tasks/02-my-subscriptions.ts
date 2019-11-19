import { fullObserver } from "./utils";
import { myInterval$, myTimeout$ } from './01-my-observables';
import { setInterval } from "core-js";

function example1() {
  const timeout$ = myTimeout$(5500);
  const subscription = timeout$.subscribe(fullObserver('unsubscribe timeout'));

  setTimeout(() => {
    subscription.unsubscribe();
  }, 2000);
}

// TODO: impl unsubscribe to: myInterval$()
function task1() {
  // TODO
  const interval$ = myInterval$(2000);
  const subscription = interval$.subscribe(fullObserver("unsubscribe interval"))

  setInterval(() => {
    subscription.unsubscribe();
  },6000);
}

export function mySubscriptionsApp() {
  // example1();
  // task1();
}
