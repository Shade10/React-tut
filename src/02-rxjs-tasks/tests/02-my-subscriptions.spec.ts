import { TestScheduler } from 'rxjs/testing';
import { map, throttleTime } from "rxjs/operators";

import { createScheduler } from "./helpers/create-scheduler";

describe('my-subscriptions', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = createScheduler();
  });

  xit('should TODO', () => {
    testScheduler.run((helpers) => {
      const { cold, expectObservable, expectSubscriptions } = helpers;
      // expectObservable(square$).toBe(expected, { d: 1, e: 4, f: 9 });
    });
  });

});
