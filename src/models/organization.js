const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Organization = sequelize.define('Organization', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Organization;
