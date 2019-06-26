import { TestScheduler } from 'rxjs/testing';

import { createScheduler } from "./helpers/create-scheduler";
import { myCustom$ } from "../01-my-observables";

describe('my-observables', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = createScheduler();
  });

  xit('should test myCustom$', () => { // TODO
    testScheduler.run((helpers) => {
      const { expectObservable } = helpers;

      // expectObservable(custom$).toBe(expected, expectedValues);
    });
  });

});
