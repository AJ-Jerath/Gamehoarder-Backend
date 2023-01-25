require('dotenv').config();

const port = process.env.PORT || 5000;
const isProduction = process.env.PORT === 5000 ? 'develop' : 'production';

module.exports = {
    port,
    isProduction
}