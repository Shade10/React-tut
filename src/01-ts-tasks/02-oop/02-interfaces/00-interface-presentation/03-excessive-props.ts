// ======
interface User2 {
  login: string;
  readonly password?: string;
}

function excessiveProps() {
  // class instance
  let ed: User2 = {
    login: 'admin',
    // xxx: 123,
  }

}
