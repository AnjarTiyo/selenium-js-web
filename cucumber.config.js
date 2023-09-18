const { setDefaultTimeout } = require("cucumber");

setDefaultTimeout(10 * 1000);

module.exports = {
    glue: ['./features/step_definitions/*.js'],
};