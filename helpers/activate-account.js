const config = require("../config");
const { Server } = require("browsermob-proxy");
require('dotenv').config();

const driver = config.driver;

async function activateAccount(accountType) {
    // const proxy = new Server();
    // proxy.start();
    // // const driver = 

    // let registrationEndpoint;

    // switch (accountType) {
    //     case 'socio':
    //         registrationEndpoint = process.env.BASE_URL + '/register'
    //         break;
    //     case 'corp':
    //         registrationEndpoint = process.env.BASE_URL + '/corp/register'
    //         break;
    //     default:
    //         break;
    // }

    // try {
    //     const proxyUrl = proxy.url;
    // }

    console.log('Account is activated')
}

module.exports = {
    activateAccount
}