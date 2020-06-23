const db = require('../db');
const { STRING, UUID, UUIDV4 } = require('sequelize');

const User = db.define('user', {
    name: {
        type: STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
});

module.exports = User;