import { merge } from "rxjs";
import { map, throttleTime } from "rxjs/operators";
import { TestScheduler } from 'rxjs/testing';

import { createScheduler } from "./helpers/create-scheduler";

describe('built-in', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = createScheduler();
  });

  it('should test map() operator', () => {
    testScheduler.run((helpers) => {
      const { cold, expectObservable, expectSubscriptions } = helpers;
      const s1$ = cold('-a--b---c---|', { a: 1, b: 2, c: 3 });
      const expected = '-d--e---f---|';

      const square$ = s1$.pipe(
        map((value: number) => value ** 2)
      );
      expectObservable(square$).toBe(expected, { d: 1, e: 4, f: 9 });
    });
  });

  it('should test throttle', () => {
    testScheduler.run((helpers) => {
      const { cold, expectObservable, expectSubscriptions } = helpers;
      const e1 = cold('-a--b--c---|');
      const subs = '   ^----------!';
      const expected = '-a-----c---|';

      const throttled$ = e1.pipe(
        throttleTime(3, testScheduler)
      );
      expectObservable(throttled$).toBe(expected);
      expectSubscriptions(e1.subscriptions).toBe(subs);
    });
  });

  it('should test merge', () => {
    testScheduler.run((helpers) => {
      const { cold, expectObservable } = helpers;
      const s1$ = cold('-a---b---c---|');
      const s2$ = cold('d--e--f--|');
      const expected = 'da-e-bf--c---|';

      // const s1$ = cold('-a-b');
      // const s2$ = cold('d--e');
      // const expected = 'da-(be)';

      const result$ = merge(s1$, s2$);
      expectObservable(result$).toBe(expected);
    });
  });

});
