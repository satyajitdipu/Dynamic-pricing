const Pricing = require('../models/pricing');
const Item = require('../models/item');

async function calculatePrice(req, res) {
  try {
    const { zone, organization_id, total_distance, item_type } = req.body;

    // Find the item_id based on the item_type
    const item = await Item.findOne({ where: { type: item_type } });
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    const { id: item_id } = item;
    console.log({ zone, organization_id, item_id });

    // Query pricing information based on zone, organization_id, and item_id
    const pricing = await Pricing.findOne({
      where: {
        zone,
        organization_id,
        item_id
      }
    });
    console.log("pricing----> ", pricing);

    if (!pricing) {
      return res.status(404).json({ error: 'Pricing not found' });
    }

    // Calculate the total price
    const { base_distance_in_km, km_price, fix_price } = pricing;
    let totalPrice = fix_price;
    if (total_distance > base_distance_in_km) {
      totalPrice += (total_distance - base_distance_in_km) * km_price;
    }

    return res.json({ total_price: totalPrice });
  } catch (error) {
    console.error('Error calculating price:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = calculatePrice;
