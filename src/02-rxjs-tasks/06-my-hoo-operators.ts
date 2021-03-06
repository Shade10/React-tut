import { Observable, Subscription, of, from, interval } from "rxjs";
import { map, mergeAll, take, } from "rxjs/operators";

import { fullObserver } from "./utils";

function letterStream$(letter: string, { delayInMs, count }) {
  return interval(delayInMs).pipe(
    take(count),
    map((i) => `${letter}-${i}`)
  );
}

// TODO: myMergeAll$
export function myMergeAll$(sourceHoo$: Observable<Observable<any>>) {
  return new Observable(function (obs) {
    const coSubscriptions: Subscription[] = [];
    let completedCount = 0;
    const mainSub = sourceHoo$.subscribe({
      next(val$: Observable<any>) {
        const sub = val$.subscribe({
          next(value: any) {
            obs.next(value);
          },
          error(err) {
            obs.error(err);
          },
          complete() {
            completedCount++;
            if (completedCount >= coSubscriptions.length) {
              obs.complete();
            }
          }
        });
        coSubscriptions.push(sub);
      },
      error(err) {
        obs.error(err);
      }
    });
    return function () {
      coSubscriptions.forEach((sub) => sub.unsubscribe());
      mainSub.unsubscribe();
    };
  });
}

function exampleMyMergeAll() {
  const a$ = letterStream$('A', { delayInMs: 600, count: 5 });
  const b$ = letterStream$('B', { delayInMs: 1500, count: 3 });
  const higherOrderStream$ = from([a$, b$]);

  myMergeAll$(higherOrderStream$)
    .subscribe(fullObserver('exampleMyMergeAll'));
}

// TODO: myConcatAll$
function myConcatAll$($sourceHoo: Observable<Observable<any>>) {
  return new Observable(function () {
  });
}

function exampleMyConcatAll() {
  const a$ = letterStream$('A', { delayInMs: 600, count: 5 });
  const b$ = letterStream$('B', { delayInMs: 1500, count: 3 });
  const higherOrderStream$ = from([a$, b$]);

  myConcatAll$(higherOrderStream$)
    .subscribe(fullObserver('exampleMyConcatAll'));
}

//switchall a-0 a-1 a-2 b-0 c-0 c-1 complete
//exhaustall a-0 ...a-4 c-0 c-1 complete
 

// TODO: mySwitchAll$
function mySwitchAll$(sourceHoo$: Observable<Observable<any>>) {
  return new Observable(function (obs) {
    let innerSub = null;
    let isInnerHaooRunning = true;
    let isHaooRunning = false;

    const mainSub = sourceHoo$.subscribe({
      next(inners$) {
        if (innerSub) {
          innerSub.unsubscribe();
        }
        innerSub = inners$.subscribe({
          next(value){
            obs.next(value);
          },
          error(error){
            obs.error(error);
          },
          complete(){
            isInnerHaooRunning = false;
            if (isInnerHaooRunning) {
              obs.complete();
              isHaooRunning = true
            }
          }
        })
      },
      error(erro){
        obs.error(erro);
      },
      complete(){
        console.log(isHaooRunning);
        if (isHaooRunning) {
          obs.complete();
        }
      }
    });
    return function () {
      mainSub.unsubscribe();
    };
  });
}

function exampleMySwitchAll() {
  const a$ = letterStream$('A', { delayInMs: 600, count: 5 });
  const b$ = letterStream$('B', { delayInMs: 1500, count: 3 });
  const c$ = letterStream$('C', { delayInMs: 1500, count: 2 });
  const arr$ = [a$, b$, c$];
  const higherOrderStream$ = interval(2000).pipe(
    take(arr$.length),
    map((i) => arr$[i])
  );

  mySwitchAll$(higherOrderStream$)
    .subscribe(fullObserver('mySwitchAll$'));
}


// TODO: myExhaustAll$
function myExhaustAll$($sourceHoo: Observable<Observable<any>>) {
  return new Observable(function () {
  });
}

function exampleMyExhaustAll() {
  const a$ = letterStream$('A', { delayInMs: 600, count: 5 });
  const b$ = letterStream$('B', { delayInMs: 1500, count: 3 });
  const c$ = letterStream$('C', { delayInMs: 1500, count: 2 });
  const arr$ = [a$, b$, c$];
  const higherOrderStream$ = interval(2000).pipe(
    take(arr$.length),
    map((i) => arr$[i])
  );

  myExhaustAll$(higherOrderStream$)
    .subscribe(fullObserver('exampleMyExhaustAll'));
}


export function myHooOperatorsApp() {
  // exampleMyMergeAll();
  // exampleMyConcatAll();
   exampleMySwitchAll();
  // exampleMyExhaustAll();
}
