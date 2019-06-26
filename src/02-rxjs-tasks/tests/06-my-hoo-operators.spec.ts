import { TestScheduler } from 'rxjs/testing';

import { createScheduler } from "./helpers/create-scheduler";
import { mergeAll } from "rxjs/operators";
import { myMergeAll$ } from "../06-my-hoo-operators";

describe('my-hoo-operators', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = createScheduler();
  });

  xdescribe('myMergeAll$', () => {
    it('should emit when any source$ emit', () => {
      testScheduler.run((helpers) => {
        const { cold, expectObservable } = helpers;
        const httpReq1$ = cold('r-----(s|)', { r: 'REQ-1', s: 'SUCCESS-1' });
        const httpReq2$ = cold('r-----(s|)', { r: 'REQ-2', s: 'SUCCESS-2' });
        const httpReq3$ = cold('r-----(s|)', { r: 'REQ-3', s: 'SUCCESS-3' });
        const click$ = cold('  -a---b---c', {
          a: httpReq1$,
          b: httpReq2$,
          c: httpReq3$,
        });
        const expected = '-a---b-x-c-y---z';
        const expectedValues = {
          a: 'REQ-1',
          b: 'REQ-2',
          c: 'REQ-3',
          x: 'SUCCESS-1',
          y: 'SUCCESS-2',
          z: 'SUCCESS-3',
        };

        const result$ = myMergeAll$(click$);
        expectObservable(result$).toBe(expected, expectedValues);
      });
    });

    xit('should TODO', () => {
      testScheduler.run((helpers) => {
        const { cold, expectObservable, expectSubscriptions } = helpers;
        const source$ = cold('-a--b---c---|');
        const expected = '-a--b---c---|';

        expectObservable(source$).toBe(expected);
      });
    });
  });

});
