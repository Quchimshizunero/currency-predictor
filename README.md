# Currency Predictor

Currency Predictor is a fun JavaScript module that predicts future currency rates using a humorous approach.

## Installation

To install Currency Predictor, simply copy the `currencyPredictor.js` file into your project.

## Usage

```javascript
const { predictFutureRate } = require('./currencyPredictor');

// Usage example: Predict future currency rates
predictFutureRate('USD', 'EUR', 7)
  .then(prediction => console.log(prediction))
  .catch(error => console.error(error.message));
```

Replace `'./currencyPredictor'` with the actual path to the `currencyPredictor.js` file in your project.

## Disclaimer

This predictor is for entertainment purposes only and should not be used for making financial decisions. The predictions are random and have no real sense.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
