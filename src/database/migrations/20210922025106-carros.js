'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('carros', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fab_id: {
        type:  DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'fabricantes', key: 'id' },
          onUpdate: 'RESTRICT',
          onDelete: 'RESTRICT',
      },
      modelo: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      cor: {
        type: DataTypes.STRING,
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

    return queryInterface.dropTable('carros');

  }
};

