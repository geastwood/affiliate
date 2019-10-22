const TABLE_NAME = 'vouchers'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: Sequelize.STRING, allowNull: false },
      desc: { type: Sequelize.STRING, allowNull: false },
      type: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    })

    return queryInterface.addConstraint(TABLE_NAME, ['name', 'desc', 'type'], {
      type: 'unique',
      name: 'unique_name_desc_type',
    })
  },

  down: (queryInterface, Sequelize) => queryInterface.dropTable(TABLE_NAME),
}
