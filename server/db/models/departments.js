const db = require('../db');
const { STRING, UUID, UUIDV4 } = require('sequelize');

const Department = db.define('department', {
    name: {
        type: STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    }
});

module.exports = Department;