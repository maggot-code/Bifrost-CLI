/*
 * @Author: maggot-code
 * @Date: 2021-07-01 16:39:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-01 18:02:05
 * @Description: file content
 */
const fs = require('fs');
const path = require('path');
const CONFIGPATH = __dirname + "/../config/external.conf.json";
const config = require('../config/external.conf.json');

// isAbsolute 用来判断是否是绝对路径
const UseSettemplate = (dirPath) => {
    if (!path.isAbsolute(dirPath)) {
        console.error('需要完整的绝对路径!');
        return false;
    }

    config.TEMPLATEDIR = dirPath;

    fs.writeFileSync(CONFIGPATH, JSON.stringify(config));
};

module.exports = UseSettemplate;