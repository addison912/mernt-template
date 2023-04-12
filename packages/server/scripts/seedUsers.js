/* eslint-disable no-undef */
const User = require('../dist/models/users.model');

const users = [
  {
    email: 'addison@email.com',
    password: 'password',
    username: 'addison',
    authenticated: false,
  },
];

simpleCreate(User, users, 'users');

function simpleCreate(DB, object_list, name) {
  DB.deleteMany({}, (err, objects) => {
    DB.create(object_list, (err, objects) => {
      if (err) {
        return console.log('err', err);
      }
      console.log('deleted all', name);
      console.log('created', objects.length, name);
    });
  });
}
