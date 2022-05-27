const {Model, DataTypes} = require('sequelize');

class Pacientes extends Model {
    static init(connection){
        super.init({
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        "data-de-nascimento": DataTypes.DATEONLY,
    },{
        sequelize: connection,
    });
}
}

module.exports =Pacientes;