const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'lol.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'olo.',
    user_id: 1,
    post_id: 1
  },  
  {
    comment_text: 'lol.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'olo.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'lol.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'eae.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'aea.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'eae.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'aea.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'iri.',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'rir.',
    user_id: 3,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
