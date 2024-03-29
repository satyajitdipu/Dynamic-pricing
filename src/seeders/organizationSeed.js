const  Organization  = require('../models/organization');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Organization.bulkCreate([
      {id: '62377f9e-2b39-4ab5-bf65-8ebe035aa871', name: 'Central Foods' },
      {id:"29dfb928-1611-4867-8e97-b92bece8614b", name: 'Southside Grocers' },
      {id: '62377f9e-2b39-4ab5-bf65-8ebe035aa879', name: 'NorthSide Foods' },
      {id:"29dfb928-1611-4867-8e97-b92bece86142", name: 'Eastside Grocers' },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await Organization.destroy({ where: {} });
  }
};
