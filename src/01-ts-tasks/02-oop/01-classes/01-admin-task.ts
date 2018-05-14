interface AdminParams {
  login: string;
  password: string;
}

// TODO: Admin class

/*
 * new Admin(params) class:
 * Public properties:
 * + uuid (generated using private static property NEXT_UUID)
 * Private properties:
 * - login
 * - password
 * Public methods:
 * + getLogin()
 * + setLogin(value)
 * + getEncodedPassword()
 * Private methods:
 * - encodePassword(passwd) (encoded using private static property ENCODING_STR)
 * Private static properties:
 * - NEXT_UUID
 * - ENCODING_STR
 * Private static methods:
 * - generateUuid() (generates next uniq UUID)
 * */
export function adminTaskApp() {
  let login: string = 'Bob';
  let passwd: string = '#secret!';

  // let admin: Admin = new Admin({
  //   login: login,
  //   password: passwd
  // });
  //
  // console.assert(admin.uuid == 0);
  // console.assert(admin.getLogin() == login);
  // login = 'kate';
  // admin.setLogin(login);
  // console.assert(admin.getLogin() == login);
  // console.assert(admin.getEncodedPassword() == passwd + 'imba!');
  //
  // let otherAdmin: Admin = new Admin({
  //   login: 'ed',
  //   password: '#123456'
  // });
  // console.assert(otherAdmin.uuid == 1);
  // console.assert(otherAdmin.getLogin() == 'ed');
  // console.assert(otherAdmin.getEncodedPassword() == '#123456' + 'imba!');

  console.log("=== adminTest passed ===");
}
