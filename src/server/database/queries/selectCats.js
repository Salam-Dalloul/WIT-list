const dbConnection = require('../dbConnection');

const selectCats = cb => {
  const query = {
    text:
    'SELECT * FROM cats'
  };
  dbConnection.query(query, cb);
};

module.exports = selectCats;