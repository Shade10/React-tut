class Person {
  // @myObservable()
  firstName: string;

  // @myObservable()
  lastName: string;

  // @myComputed(['firstName', 'lastName'])
  fullName() {
    return [this.firstName, this.lastName].join(' ');
  }
}

function testComputed() {
  const bob = new Person();
  console.log('testObservable none:', bob.fullName);
  bob.firstName = 'Uncle';
  console.log('testObservable 1st:', bob.fullName);
  bob.lastName = 'BOB!';
  console.log('testObservable 2nd:', bob.fullName);

  const ed = new Person();
  console.log('should be undefined:', ed.fullName);
}

export function decoratorsTaskApp() {
  testComputed();
}
