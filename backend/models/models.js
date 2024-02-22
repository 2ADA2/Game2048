const sequalize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequalize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userName: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING},
    img: {type: DataTypes.STRING}
})

const UserList = sequalize.define('userList', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Friend = sequalize.define('friend', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

User.hasOne(UserList);
UserList.belongsTo(User);

UserList.hasMany(Friend);
Friend.belongsTo(UserList);

Friend.hasOne(User);
User.belongsTo(Friend);

module.exports = {
    User,
    UserList,
    Friend
}