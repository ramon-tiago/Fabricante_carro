module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('fabricantes', {
      id: {
        type:┬áDataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      descricao: {
        type:┬áDataTypes.STRING,
        allowNull: false,
        
      },
      created_at: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      }, 
      updated_at: {
        type: DataTypes.DATEONLY,
        allowNull: false,
     },    
  });

},

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable('fabricantes');

  }
};