import { Observable, Observer } from 'rxjs';

export function myCustom$(name: string): Observable<string> {
  return new Observable((observer) => {
    console.log('generating Observable');
    // next
    // error
    // complete
  });
}

function example1() {
  const custom$ = myCustom$('bob'); // nothing happens
  custom$.subscribe((value: string) => console.log('[NEXT] timeout', value));
  // TODO 1b: next(), error(), complete()
  // TODO 2: each subscribe call generating fn
  // custom$.subscribe(fullObserver('example1'));
}


//======


// TODO myTimeout$()
export function myTimeout$(delayInMs: number): Observable<number> {
  // return null; // TODO
  return new Observable(function(obs){
    const timeoutID = setTimeout(() => {
      obs.next(123);
      obs.next(456);
      obs.complete();
    }, delayInMs);

    return function onUnsubscirbe(){
      clearTimeout(timeoutID)
    }
  });


}

function timeoutTask() {
  const timeout$ = myTimeout$(2000); // nothing happens
  // timeout$.subscribe(myFullObserver('timeoutTask'));
  timeout$.subscribe({
    next(value){
      console.log('[next] example',value);
    },
    complete(){
      console.log('[complete] example');

    },
    error(err){
      console.log('[error] example',err);
    }
  })
}

// TODO task: myFullObserver(tag)
function myFullObserver(tag: string) {
  return {
    next(value){
      console.log('[next] example',value);
    },
    complete(){
      console.log('[complete] example');

    },
    error(err){
      console.log('[error] example',err);
    }
  }
}

function myFullObserverTest(tag: any) {
  tag.subscribe({
    next(value){
      console.log('[next] example',value);
    },
    complete(){
      console.log('[complete] example');

    },
    error(err){
      console.log('[error] example',err);
    }
  })
}

// TODO task: myFromArray$
export function myFromArray$(items: any[]): Observable<any> {
  return new Observable(function(obs){
    items.forEach(element => {
      obs.next(element);
    });
    obs.complete();
  });
}

function fromArrayTask() {
  const names = ['bob', 'ed', 'kate'];
  myFromArray$(names)
    .subscribe(myFullObserver('fromArrayTask'));
}

// TODO task: myRange$
export function myRange$(startValue: number, count: number): Observable<number> {
  return new Observable(function(obs){
    let counter = 1;
    for (startValue; counter <= count; counter++) {
      obs.next(startValue++);
      
    }
  })
}

function rangeTask() {
  myRange$(5, 7)
    .subscribe(myFullObserver('rangeTask'));
}

// TODO task: myInterval$
export function myInterval$(delayInMs: number): Observable<number> {
  return new Observable(function(obse){
    let i = 0;
    setInterval(function(obs) {
      obse.next(i);
      i++;
    }, delayInMs);

  });
}

function intervalTask() {
  myInterval$(1000)
  .subscribe({
    next(value){
      console.log('[next] example', value);
    },
    complete(){
      console.log('[complete] example');

    },
    error(err){
      console.log('[error] example',err);
    }
  })
}

function myFromArrayWithDelay$(items: any[], delayInMs: number) {
  return new Observable(obs => {
    setTimeout(() => {
      items.forEach(element => {
        obs.next(element);
      });
      obs.complete();
    }, delayInMs);
  })
}

function fromArrayWithDelayTask() {
  const values = [100, 200, 300];
  myFromArrayWithDelay$(values, 800)
    .subscribe(myFullObserver('fromArrayWithDelayTask'));
}

function myThrow$(error) {
  return new Observable(obs => {
    obs.next(error);
  })
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
  //example1();
  //timeoutTask();
  // intervalTask();
  // fromArrayTask();
  // fromArrayWithDelayTask();
  // throwTask();
  // rangeTask();
}
