import { myImportsApp } from "./01-ts-tasks/00-modules/00-modules-presentation/my-imports";

// TODO: import moduleTaskApp

// TS
import { stringsApp } from "./01-ts-tasks/01-basics/02-strings";
import { enumsApp } from "./01-ts-tasks/01-basics/03-enums";
import { functionsApp } from "./01-ts-tasks/01-basics/04-functions";
import { functionsContextApp } from "./01-ts-tasks/01-basics/06-functions-context";
import { adminTaskApp } from "./01-ts-tasks/02-oop/01-classes/01-admin-task";
import { eventedExampleUsageApp } from "./01-ts-tasks/02-oop/03-timer-task/01-evented-example-usage";
import { arrayListTaskApp } from "./01-ts-tasks/03-generics/02-array-list-task";
import { decoratorsTaskApp } from "./01-ts-tasks/04-decorators/01-decorators-task";
import { logClassApp } from "./01-ts-tasks/04-decorators/00-decrators-presentation/01-class-decorators";
import { methodDecoratorApp } from "./01-ts-tasks/04-decorators/00-decrators-presentation/02-method-decorator";
import { propertyDecoratorsApp } from "./01-ts-tasks/04-decorators/00-decrators-presentation/03-property-decorators";
import { timerApp } from "./01-ts-tasks/02-oop/03-timer-task/02-timerApp";

// RxJS
import { myObservablesApp } from "./02-rxjs-tasks/01-my-observables";
import { mySubscriptionsApp } from "./02-rxjs-tasks/02-my-subscriptions";
import { myOperatorsApp } from "./02-rxjs-tasks/03-my-operators";
import { builtInApp } from "./02-rxjs-tasks/04-built-in";
import { combineMultipleStreamsApp } from "./02-rxjs-tasks/05-combine-mutiple-streams";
import { myHooOperatorsApp } from "./02-rxjs-tasks/06-my-hoo-operators";
import { higherOrderObservablesApp } from "./02-rxjs-tasks/07-higher-order-observable";
import { catchRetryTaskApp } from "./02-rxjs-tasks/08-catch-retry-task";
import { complexTaskApp } from "./02-rxjs-tasks/09-complex-task";
import { autocompleteTaskApp } from "./02-rxjs-tasks/10-autocomplete-task";
import { ajaxWebSocketTaskApp } from "./02-rxjs-tasks/11-ajax-web-sockets-tasks";
import { simpleFormTaskApp } from "./02-rxjs-tasks/12-simple-form-task";
import { subjectExamplesApp } from "./02-rxjs-tasks/13-subject-examples";
import { intersectionTypesApp } from "./01b-ts-adv-tasks/03-intersection-types";
import { mixinsApp } from "./01b-ts-adv-tasks/04-mixin";
import { unionsAliasesApp } from "./01b-ts-adv-tasks/02-unions-aliases";
import { realEstatesServiceTaskApp } from "./02-rxjs-tasks/14-real-estates-service-task";


class Main {
  run() {
    // TODO TS tasks
    // myImportsApp();
    // moduleTaskApp();
    // stringsApp();
    // enumsApp();
    // functionsApp();
    // functionsContextApp();
    // adminTaskApp();
    // eventedExampleUsageApp();
    // timerApp();
    // arrayListTaskApp();
    // logClassApp();
    // methodDecoratorApp();
    // propertyDecoratorsApp();
    // decoratorsTaskApp();

    // TODO RxJS tasks
    // myObservablesApp();
    // mySubscriptionsApp();
    // myOperatorsApp();
    // builtInApp();
    // combineMultipleStreamsApp();
    // myHooOperatorsApp();
    // higherOrderObservablesApp();
    // catchRetryTaskApp();
    // complexTaskApp();
    // autocompleteTaskApp();

    // TODO D3
    // ajaxWebSocketTaskApp();
    // simpleFormTaskApp();
    // subjectExamplesApp();
    // realEstatesServiceTaskApp();

    // TS adv
    // intersectionTypesApp();
    // mixinsApp();
    // unionsAliasesApp();
  }
}

const main = new Main();
main.run();
