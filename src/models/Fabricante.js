const {Model, DataTypes} = require('sequelize')

class Fabricante extends Model {
    static init (sequelize) {
        super.init({
            // fab_id: {
            //     type: DataTypes.INTEGER,
            //     primaryKey: true,               
            // },
            descricao: DataTypes.STRING,
        }, {
            sequelize,
            //tableName: 'mar_marca'
        })
    }
    static associate(models) {
        this.hasMany(models.Carro , {foreignKey: 'fab_id', as:'carros'})
    }
}
module.exports = Fabricante