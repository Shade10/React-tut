import { Observable, Observer } from 'rxjs';

export function myCustomStream$(name: string): Observable<string> {
  return new Observable((observer) => {
    console.log('generating Observable');
    // next
    // error
    // complete
  });
}

function example1() {
  const custom$ = myCustomStream$('bob'); // nothing happens
  // custom$.subscribe((value: string) => console.log('[NEXT] timeout', value));
  // TODO 1b: next(), error(), complete()
  // TODO 2: each subscribe call generating fn
  // custom$.subscribe(fullObserver('example1'));
}


//======


// TODO myTimeout$()
export function myTimeout$(delayInMs: number): Observable<string> {
  return null; // TODO
}

function timeoutTask() {
  const timeout$ = myTimeout$(2000); // nothing happens
  timeout$.subscribe(myFullObserver('timeoutTask'));
}

// TODO task: myFullObserver(tag)
function myFullObserver(tag: string) {
  return null;
}

// TODO task: myFromArray$
export function myFromArray$(items: any[]): Observable<any> {
  return null; // TODO
}

function fromArrayTask() {
  const names = ['bob', 'ed', 'kate'];
  myFromArray$(names)
    .subscribe(myFullObserver('fromArrayTask'));
}

// TODO task: myRange$
export function myRange$(startValue: number, count: number): Observable<number> {
  return null; // TODO
}

function rangeTask() {
  myRange$(5, 7)
    .subscribe(myFullObserver('rangeTask'));
}

// TODO task: myInterval$
export function myInterval$(delayInMs: number): Observable<number> {
  return null; // TODO
}

function intervalTask() {
  myInterval$(1000)
    .subscribe(myFullObserver('intervalTask'));
}

function myFromArrayWithDelay$(items: any[], delayInMs: number) {
  return null;
}

function fromArrayWithDelayTask() {
  const values = [100, 200, 300];
  myFromArrayWithDelay$(values, 800)
    .subscribe(myFullObserver('fromArrayWithDelayTask'));
}

function myThrow$(error) {
  return null;
}

function throwTask() {
  myThrow$(new Error('Jakis blad!'))
    .subscribe(myFullObserver('throwTask'));
}


// TODO task: myThrow$

// more TODO

// TODO task: myOf$

// TODO task: myTimer$

export function myObservablesApp() {
  // example1();
  // timeoutTask();
  // intervalTask();
  // fromArrayTask();
  // fromArrayWithDelayTask();
  // throwTask();
  // rangeTask();
}
