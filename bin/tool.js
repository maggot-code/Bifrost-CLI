/*
 * @Author: maggot-code
 * @Date: 2021-07-01 14:01:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-06 14:15:42
 * @Description: file content
 */
const path = require('path')
const { isString } = require('lodash');
const { TEMPLATEPREFIX } = require('../config/external.conf.json');

// 参数准备
const paramsGetready = (projectName) => {
    // 获取node进程的工作目录
    const cwd = process.cwd();

    // 判断是否是在当前目录
    const inCurrentDir = projectName === '.';

    // 获取项目名(当前目录 or 指定的项目名)
    const name = inCurrentDir ? path.relative('../', cwd) : projectName;

    // 真正的目录地址
    const targetDir = path.resolve(cwd, projectName);

    return {
        cwd: cwd,
        inCurrentDir: inCurrentDir,
        name: name,
        targetDir: targetDir,
    }
}

const camelCase = (string) => {
    // const rex = /-(\w)/g;
    // return string.replace(rex, (_, str) => str.toUpperCase());

    const baseString = string.split('-');
    return baseString.map(str => str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()).join("");
};

// 获取工程或项目的标识前缀
const getProjectPrefix = () => isString(TEMPLATEPREFIX) && TEMPLATEPREFIX.length > 0 ? TEMPLATEPREFIX : "as";

module.exports = {
    PREFIX: getProjectPrefix(),
    camelCase,
    paramsGetready,
}