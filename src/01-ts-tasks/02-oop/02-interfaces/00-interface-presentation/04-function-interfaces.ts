// todo FetchDataCallback

interface User {
  login: string;
}

function fetchData(url: string, callback: Function): void {
}

function fetchApp() {
  fetchData('/api/users', function (users: User[], error?: Error) {
    // ...
  })
}
