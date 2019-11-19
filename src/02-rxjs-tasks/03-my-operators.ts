import { Observable } from 'rxjs';

import { myFromArray$, myInterval$, myRange$ } from './01-my-observables';
import { fullObserver } from './utils';

export function myTake$(source$: Observable<any>, count: number) {
  return new Observable((obs) => {
    // TODO 1: impl
    let i = 0;
    const sourceSub = source$.subscribe({
      next(value){
        if (i < count) {
          obs.next(value);
        }
        i += 1;
        if (i> count) {
          obs.complete();
        }
      },
      error(error){
        obs.error(error);
      },
      complete(){
        obs.complete();
      }
    })
    return function(){
      sourceSub.unsubscribe()
    }
    // TODO 2: clear up
  });
}

function taskTake() {
  const interval$ = myInterval$(500);
  const firstFour$ = myTake$(interval$, 4);
  firstFour$.subscribe(fullObserver('taskTake'));
}

// TODO task: mySkip$
function mySkip$(source$: Observable<any>, count: number): Observable<any> {
  return new Observable((obs) => {
    let i = 0;
    const sourceSub = source$.subscribe({
      next(value){
        i += 1;
        if (i > count) {
          obs.next(value);
        }
      },
      error(error){
        obs.error(error);
      },
      complete(){
        obs.complete();
      }
    })
    return function(){
      sourceSub.unsubscribe()
    }
  });
}

function taskSkip() {
  const interval$ = myInterval$(500);
  const withoutFirstSeven$ = mySkip$(interval$, 7);
  withoutFirstSeven$.subscribe(fullObserver('taskSkip'));
}

// TODO task: myMap$
function myMap$(source$: Observable<any>, mappingFn: Function): Observable<any> {
  return new Observable((obs) => {
    const sourceSub = source$.subscribe({
      next(value){
        if (mappingFn(value)) {
          obs.next(value)
        }
      },
      error(error){
        obs.error(error);
      },
      complete(){
        obs.complete();
      }
    })
    return function(){
      sourceSub.unsubscribe()
    }
  });
}

function taskMap() {
  const interval$ = myInterval$(500);
  const mapped$ = myMap$(interval$, (i) => i * 10);
  mapped$.subscribe(fullObserver('taskMap'));

  const names$ = myFromArray$(['bob', 'ed']);
  const greetings$ = myMap$(names$, (name) => `Hello ${name}!`);
  greetings$.subscribe(fullObserver('greetings'));
}

// TODO task: myFilter$
function myFilter$(source$: Observable<any>, filteringFn: Function): Observable<any> {
  return new Observable(obs => {
    let sourceSub = source$.subscribe({
      next(value){
        if (filteringFn(value)) {
          obs.next(value);
        }
      },
      error(error){
        obs.error(error);
      },
      complete(){
        obs.complete();
      }
    })
  })
}

function taskFilter() {
  const interval$ = myInterval$(500);
  const evens$ = myFilter$(interval$, (i) => i % 2 === 0);
  evens$.subscribe(fullObserver('taskFilter'));

  const names$ = myFromArray$(['bob', 'ed', 'kate', 'ben']);
  myFilter$(names$, (name) => name[0] === 'b')
    .subscribe(fullObserver('filter names'));
}

// TODO task: myTakeWhile$
function myTakeWhile$(source$: Observable<any>, predicate: Function): Observable<any> {
  return new Observable((obs) => {
    const sourceSub = source$.subscribe({
      next(value){
        if (predicate(value)) {
          obs.next(value);
        }else{
          obs.complete();
        }
      },
      error(error){
        obs.error(error);
      },
      complete(){
        obs.complete();
      }
    })
    return function(){
      sourceSub.unsubscribe()
    }
  });
}

function taskTakeWhile() {
  const interval$ = myInterval$(500);
  const evens$ = myTakeWhile$(interval$, (i) => i < 10);
  evens$.subscribe(fullObserver('taskTakeWhile'));

  const names$ = myFromArray$(['bob', 'ben', 'bartosz', 'ed', 'beth']);
  myTakeWhile$(names$, (name) => name[0] === 'b')
    .subscribe(fullObserver('taskTakeWhile names on B'));
}

// TODO task: myFirst$
function myFirst$(source$: Observable<any>, predicate: Function): Observable<any> {
  return new Observable(obs =>{
    const sourceSub = source$.subscribe({
      next(value){
        if (predicate(value)) {
          obs.next(value);
          obs.complete();
        }
      },
      error(error){
        obs.error(error);
      },
      complete(){
        obs.complete();
      }
    })
    return function(){
      sourceSub.unsubscribe();
    }
  })
}

function taskFirst() {
  const interval$ = myInterval$(500);
  const evens$ = myFirst$(interval$, (i) => i > 5);
  evens$.subscribe(fullObserver('taskFirst'));
}

// TODO task: myReduce$
function myReduce$(source$: Observable<any>, accumulatorFn: Function, startValue: any): Observable<any> {
  return new Observable((obs) => {
    let memo = startValue;
    const sourceSub = source$.subscribe({
      next(value){
        memo = accumulatorFn(memo,value);
      },
      error(error){
        obs.error(error);
      },
      complete(){
        obs.next(memo);
        obs.complete();
      }
    })
    return function(){
      sourceSub.unsubscribe()
    }
  });
}

function taskReduce() {
  const numbers$ = myFromArray$([3, 4, 10]);
  const mltpResult$ = myReduce$(
    numbers$,
    (memo, item) => memo * item,
    -5
  );
  mltpResult$.subscribe(fullObserver('taskReduce'));
}

// TODO myBufferCount$
function myBufferCount$(source$, bufferSize) {
  return new Observable((obs) => {
    let buffer = [];
    const sourceSub = source$.subscribe({
      next(value){
        buffer.push(value);
        if (buffer.length >= bufferSize) {
          obs.next(buffer);
          buffer = [];
        };
      },
      error(error){
        obs.error(error);
      },
      complete(){
        obs.next(buffer);
        obs.complete();
      }
    })
    return function(){
      sourceSub.unsubscribe()
    }
  });
}

function taskBufferCount() {
  const values$ = myRange$(0, 67);
  myBufferCount$(values$, 25)
    .subscribe(fullObserver('taskBufferCount'));
}

export function myOperatorsApp() {
  //taskTake();
  // taskSkip();
  // taskMap();
  // taskFilter();
  // taskTakeWhile();
  // taskFirst();
  // taskReduce();
   taskBufferCount();
}
