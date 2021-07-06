/*
 * @Author: maggot-code
 * @Date: 2021-07-06 13:30:56
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-06 15:04:51
 * @Description: file content
 */
const config = require('../config/external.conf.json');

const UseShowConfig = () => {
    console.log('');
    for (const key in config) {
        console.log(`${key} = ${config[key]}`);
    }
    console.log('');
};

module.exports = UseShowConfig;