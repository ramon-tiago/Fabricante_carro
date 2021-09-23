const {Model, DataTypes} = require('sequelize')

class Carro extends Model {
    static init (sequelize) {
        super.init({
            //fab_id: DataTypes.INTEGER
            modelo: DataTypes.STRING,
            cor: DataTypes.STRING,

        }, {
            sequelize,
            //tableName: 'Carro'
        })
    }  

    static associate(models) {
        this.belongsTo(models.Fabricante, {foreignKey: 'fab_id', as: 'fabricante'})
    }
    
}

module.exports = Carro