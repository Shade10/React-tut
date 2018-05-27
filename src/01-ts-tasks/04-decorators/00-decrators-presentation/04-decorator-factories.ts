// TODO: logClassFactory

// @logClassFactory('My decorator name')
export class Person {
  constructor(private name: string) {
  }
}

export function logClassFactoryApp() {
  new Person('kate');
}
