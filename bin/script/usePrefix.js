/*
 * @Author: maggot-code
 * @Date: 2021-07-06 13:27:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-06 15:06:43
 * @Description: file content
 */
const fs = require('fs');
const CONFIGPATH = __dirname + "/../config/external.conf.json";
const config = require('../config/external.conf.json');

const UsePrefix = (character) => {
    config.TEMPLATEPREFIX = character;

    fs.writeFileSync(CONFIGPATH, JSON.stringify(config));
};

module.exports = UsePrefix;