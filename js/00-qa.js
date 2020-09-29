const users = [{ name: 'our user', email: 'rossvazquez@xinware.com' }];

const getUserWithEmail = (users, email) =>
  users.find(({ email: userEmail }) => userEmail === email);

console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));
