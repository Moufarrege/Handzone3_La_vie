const {Model, DataTypes} = require('sequelize');

class Psicologos extends Model {
    static init(connection){
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            apresentacao: DataTypes.TEXT,
        },{
        sequelize: connection,
    });
}
}

module.exports =Psicologos;