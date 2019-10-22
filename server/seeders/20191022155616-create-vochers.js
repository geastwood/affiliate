module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert(
      'vouchers',
      [
        {
          name: 'test vocher1',
          desc: 'description of test vocher1',
          type: 0,
        },
        {
          name: 'test vocher2',
          desc: 'description of test vocher2',
          type: 1,
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
    return queryInterface.bulkDelete('vouchers', null, {})
  },
}
