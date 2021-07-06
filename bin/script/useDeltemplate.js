/*
 * @Author: maggot-code
 * @Date: 2021-07-01 16:41:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-06 15:04:18
 * @Description: file content
 */
const fs = require('fs');
const CONFIGPATH = __dirname + "/../config/external.conf.json";
const config = require('../config/external.conf.json');

const UseDeltemplate = () => {
    config.TEMPLATEDIR = "";

    fs.writeFileSync(CONFIGPATH, JSON.stringify(config));
};

module.exports = UseDeltemplate;