'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn('Users', 'email', {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    }).then( () => {
      return queryInterface.addColumn('Users', 'age', {
        type: Sequelize.INTEGER,
        validate: {
          min: 0,
          max: 100
        }
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.removeColumn('Users', 'email').then(() => {
      queryInterface.removeColumn('Users', 'age');
    });
  }
};
