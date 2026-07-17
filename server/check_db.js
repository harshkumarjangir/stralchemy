import mongoose from 'mongoose';
import StrategyRequest from './models/StrategyRequest.js';

mongoose.connect('mongodb://localhost:27017/stralchemy')
  .then(async () => {
    const strategies = await StrategyRequest.find({});
    console.log(JSON.stringify(strategies, null, 2));
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
