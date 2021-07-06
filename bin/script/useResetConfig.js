/*
 * @Author: maggot-code
 * @Date: 2021-07-01 17:59:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-06 15:06:35
 * @Description: file content
 */
const fs = require('fs');
const CONFIGPATH = __dirname + "/../config/external.conf.json";
const defConfig = require('../config/external.def.conf.json');

const UseResetConfig = () => {
    fs.writeFileSync(CONFIGPATH, JSON.stringify(defConfig));
};

module.exports = UseResetConfig;