class PriceCalculator {
    static calculatePrice(basePrice, perKmPrice, totalDistance) {
      return basePrice + (perKmPrice * totalDistance);
    }
  }
  
  module.exports = PriceCalculator;
  