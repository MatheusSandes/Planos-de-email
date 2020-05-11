'use strict';
//Criado utilizando npx sequelize-cli model:generate
//--name: User --atributes name:string,email:string, ...
//Depois é so subir no banco de dados usando migrations (npx sequelize-cli db:migrate)
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.Plan);
  };
  return User;
};