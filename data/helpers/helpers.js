const db = require('../dbConfig');

module.exports = {
    getDishes: function() {
        return db('dishes');
    }
}