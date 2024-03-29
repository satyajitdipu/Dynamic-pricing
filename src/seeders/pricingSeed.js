const  Pricing  = require('../models/pricing');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await Pricing.bulkCreate([
      { organization_id: '62377f9e-2b39-4ab5-bf65-8ebe035aa871', item_id: '069ee73e-d1b7-44fc-bae8-fa2288941df1', zone: 'central', base_distance_in_km: 5, km_price: 120, fix_price: 1000 },
      { organization_id: '29dfb928-1611-4867-8e97-b92bece8614b', item_id: 'ee8a7336-9c32-4e9d-ac33-051bbe196c30', zone: 'central', base_distance_in_km: 5, km_price: 100, fix_price: 800 },
      { organization_id: '62377f9e-2b39-4ab5-bf65-8ebe035aa879', item_id: '069ee73e-d1b7-44fc-bae8-fa2288941df9', zone: 'south', base_distance_in_km: 5, km_price: 150, fix_price: 700 },
      { organization_id: '29dfb928-1611-4867-8e97-b92bece86142', item_id: 'ee8a7336-9c32-4e9d-ac33-051bbe296c30', zone: 'south', base_distance_in_km: 5, km_price: 170, fix_price: 900 }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await Pricing.destroy({ where: {} });
  }
};
