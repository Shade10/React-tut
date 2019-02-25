// import { Evented } from "./src/Evented";
// import { MyObservableListener } from "./src/MyObservableListener";

export function eventedExampleUsageApp() {
  // const bob = new Evented();
  // const other = new Evented();
  //
  // const listener: MyObservableListener = function (...params: any[]) {
  //   console.log("1st listener triggered", params);
  // };
  //
  // // assign many listeners to single event
  // bob.on('click', listener);
  // bob.on('click', function (...params) {
  //   console.log("2nd listener triggered...", params);
  // });
  //
  // other.on('click', listener);
  //
  // // trigger event
  // bob.trigger('click', 1, "qq"); // log msg on console IMPORTANT: should NOT trigger any event on other
  // bob.trigger('click', 123, 13123, 13131, 214); // log msg on console IMPORTANT: should NOT trigger any event on other
  //
  // // remove all event listeners
  // bob.off('click');
  //
  // // trigger event
  // bob.trigger('click', 1, "qq"); // nothing logged
  // bob.trigger("some other event"); // nothing logged
  // console.log("eventedExampleUsage() END");
}
