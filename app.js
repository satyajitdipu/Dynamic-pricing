const express = require('express');
const bodyParser = require('body-parser');
const pricingRoutes = require('./src/routes/pricingRoutes');

const app = express();
app.use(bodyParser.json());


app.use('/api/pricing', pricingRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});