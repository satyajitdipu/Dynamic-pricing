const itemSeed = require('../src/seeders/itemSeed');
const organizationSeed = require('../src/seeders/organizationSeed');
const pricingSeed = require('../src/seeders/pricingSeed');
const Item = require('../src/models/item'); 
const Organization = require('../src/models/organization');
const Pricing = require('../src/models/pricing')

async function runSeeders() {
  try {
    await Item.sync();
    await Organization.sync();
    await Pricing.sync();
    
    await itemSeed.up();
    await organizationSeed.up();
    await pricingSeed.up();
    console.log('Seeders executed successfully');
  } catch (error) {
    console.error('Error executing seeders:', error);
  }
}

runSeeders();