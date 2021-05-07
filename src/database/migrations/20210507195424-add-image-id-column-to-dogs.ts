module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('dogs', 'image_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'files',
        key: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      }
    })
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('dogs', 'image_id')
  }
}
