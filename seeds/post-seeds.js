const { Post } = require('../models');

const postdata = [
  {
    title: 'Menace to Society.',
    post_text: 'Is running around the house as bad as people say it is?',
    user_id: 1
  },
  {
    title: 'Web Designing 101.',
    post_text: 'Any tips and tricks would be appreciated.',
    user_id: 2
  },
  {
    title: 'Handsome Boy.',
    post_text: 'When my parents say the word Walk, I go feral.',
    user_id: 3
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
