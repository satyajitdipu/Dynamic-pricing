const  Item = require('../models/item'); // Import your Item model

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Item.bulkCreate([
      { id:"069ee73e-d1b7-44fc-bae8-fa2288941df1", type: 'perishable', description: 'Milk' },
      { id:"ee8a7336-9c32-4e9d-ac33-051bbe196c30",type: 'non-perishable', description: 'Canned beans' },
      // { id:"069ee73e-d1b7-44fc-bae8-fa2288941df9", type: 'perishable', description: 'Rice' },
      // { id:"ee8a7336-9c32-4e9d-ac33-051bbe296c30",type: 'non-perishable', description: 'Egg' },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await Item.destroy({ where: {} });
  }
};
