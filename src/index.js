const JustCurrencyConverter = require('just-currency-converter');

// Initialize the converter with your API key
const converter = new JustCurrencyConverter('YOUR_API_KEY');

// Function to predict future currency rates (just for fun!)
async function predictFutureRate(fromCurrency, toCurrency, days) {
  try {
    // Get the current rate
    const currentRate = await converter.convert(1, fromCurrency, toCurrency);

    // Generate a random percentage change for the future rate
    const percentageChange = Math.random() * 10 - 5; // Random change between -5% to +5%
    
    // Calculate the future rate
    const futureRate = currentRate * (1 + percentageChange / 100);

    // Return the prediction
    return {
      currentRate: currentRate.toFixed(4),
      futureRate: futureRate.toFixed(4),
      disclaimer: 'Disclaimer: This prediction is just a joke and has no real sense. Don\'t make any financial decisions based on it!'
    };
  } catch (error) {
    throw new Error(`Prediction failed: ${error.message}`);
  }
}

module.exports = { predictFutureRate };
