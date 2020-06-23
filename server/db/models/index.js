const User = require('./users');
const Department = require('./departments');

User.belongsTo(Department);
Department.hasMany(User);

module.exports = {
    User,
    Department
}