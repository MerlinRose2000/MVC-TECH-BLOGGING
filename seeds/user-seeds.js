const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Smokey2014',
    email: 'smokey@email.com',
    password: '123456'
  },
  {
    username: 'Beans2022',
    email: 'beans@email.com',
    password: '654321'
  },
  {
    username: 'Emilia2000',
    email: 'emilia@email.com',
    password: '0002000'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
