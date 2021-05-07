module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('dogs', 'birthday', {
      type: Sequelize.DATE
    })
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('dogs', 'birthday')
  }
}
