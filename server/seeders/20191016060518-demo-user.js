'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'fei1',
          lastName: 'liu2',
          email: 'whatnot1@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'fei',
          lastName: 'liu',
          email: 'whatnot@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkDelete('Users', null, {})
  },
}
