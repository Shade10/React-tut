// const array = [12, 23, 34, 45];
// for (let i = 0; i < array.length; i++) {
//   let arrayElement = array[i];
// }


// TODO: map
function map(list, mappingFn) {
  return [];
}

function testMap() {
  let names: string[] = ["Bob", "Ed", "Kate"];
  let mapper: Function = function (name: string) {
    return "Hello, " + name;
  };
  let greetings: string[] = map(names, mapper);
  console.log("map:", greetings);
}

// TODO: filter
function filter(list, filteringFn) {
  return [];
}

function testFilter() {
  let names: string[] = ["Bob", "Ed", "Brian", "Ben", "Kate"];
  let startingWithB: Function = function (name) {
    return name[0].toUpperCase() === "B";
  };
  let namesStartingWithB: string[] = filter(names, startingWithB);
  console.log("filter:", namesStartingWithB);

  const evens = filter([11, 12, 13, 14, 15], (n) => n % 2 === 0);
  console.log("filter evens:", evens);
}

// TODO: reduce
function reduce(list, accumulatorFn, startValue) {
  return [];
}

function testReduce() {
  let sumFn: Function = function (memo: any, item: any, index: number, list: any[]): any {
    return memo + item;
  };
  // should return => 10
  console.log("reduce 1:", reduce([2, 5, 7], sumFn, -4));

  let mergeFn = function (memo: any, item: any, index: number, list: any[]): any {
    return merge(memo, item);
  };
  // should return => {name: "bob", age: 12, sex: "M"}
  const results = reduce(
    [{name: "bob"}, {age: 12}, {sex: "M"}],
    mergeFn,
    {}
  );
  console.log("reduce 2:", results);
}


// const obj = {name: 'bob'};
// for (let propertyName in obj) {
//   let value = obj[propertyName];
// }

// TODO: merge
function merge(destination, source) {
}

function testMerge() {
  // should return => {xxx: "qq", yyy: 2, zzz: 3}
  console.log("merge:", merge({xxx: 1, yyy: 2}, {xxx: "qq", zzz: 3}));
}

// TODO: all
function all(list, test) {
  return false;
}

function testAll() {
// should return => false
  let greaterThanZero: Function = function (item: any, index: number): boolean {
    return item > 0;
  };
  console.log("all 1:", all([3, 5, -1, 9], greaterThanZero));

// should return => true
  let firstLetterIsB: Function = function (item: any, index: number): boolean {
    return item[0] === "B";
  };
  console.log("all 2:", all(["Bob", "Ben", "Beth"], firstLetterIsB));
}

// TODO: pluck
function pluck(list, propertyName) {
  return [];
}

function testPluck() {
  let people: Object[] = [
    {name: "Bob", age: 12, sex: "M"},
    {name: "Kate", age: 22, sex: "F"},
    {name: "Ed", age: 34, sex: "M"}
  ];
  // should return => ["Bob", "Kate", "Ed"]
  console.log("pluck 1:", pluck(people, "name"));

  // should return => ["M", "F", "M"]
  console.log("pluck 2:", pluck(people, "sex"));
}

// TODO: groupBy
function groupBy(list, groupingFn) {
  return {};
}

function testGroupBy() {
  let names: string[] = ["Bob", "Ed", "Kate", "Bo", "Ann", "Eve"];

  // should return => {2: ["Ed", "Bo"], 3: ["Bob", "Ann", "Eve"], 4: ["Kate"]}
  let byLength: Function = function (item: any): number {
    return item.length;
  };
  console.log("groupBy 1:", groupBy(names, byLength));

  // should return => {A: ["Ann"], B: ["Bob", "Bo"], E: ["Ed", "Eve"], K: ["Kate"]}
  let byFirstLetter: Function = function (item: any): string {
    return item[0];
  };
  console.log("groupBy 2:", groupBy(names, byFirstLetter));
}

export function functionsApp() {
  testAll();
  testFilter();
  testGroupBy();
  testMap();
  testMerge();
  testPluck();
  testReduce();
}
