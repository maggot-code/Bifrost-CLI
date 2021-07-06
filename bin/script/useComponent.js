/*
 * @Author: maggot-code
 * @Date: 2021-07-06 10:30:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-06 14:42:44
 * @Description: file content
 */
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const { PREFIX, camelCase } = require('../tool');

const renderEntryTemplate = require('../template/component/entry');
const renderVueTemplate = require('../template/component/vue');

const HANDLERNOTDIR = [{
    name: 'ok',
    type: 'confirm',
    message: '目录不存在,需要创建吗'
}];

const UseComponent = (dir, componentName) => {
    const componentPath = path.resolve(path.normalize(dir));

    // 如果目录不存在则提醒是否创建目录
    if (fs.existsSync(componentPath)) {
        createTemplateFolder(componentPath, componentName)(true);
    } else {
        inquirer.prompt(HANDLERNOTDIR)
            .then(createNotFolder(componentPath))
            .then(createTemplateFolder(componentPath, componentName));
    }
};

const createNotFolder = (path) => ({ ok }) => {
    if (!ok) return false;

    fs.mkdir(path, { recursive: true }, (error) => {
        console.error(error);
    });

    return true;
}

const createTemplateFolder = (basepath, name) => (choice) => {
    if (!choice) return false;

    const { fname, cname, ename } = outPutComponentName(name);

    const componentPath = path.resolve(basepath, fname);

    // 如果目录不存在则提醒是否创建目录
    if (fs.existsSync(componentPath)) {
        console.warn(`“${fname}” 组件已经存在了!`);

        return false;
    }

    const { entry, vue } = createTemplateString(cname, ename);

    createComponentDir({
        path: componentPath,
        entryContent: entry,
        vueContent: vue
    })
}

const outPutComponentName = (name) => {
    const fname = name;
    const cname = `${PREFIX}-${name}`;
    const ename = camelCase(cname);

    return {
        fname,
        cname,
        ename
    }
}

const createTemplateString = (componentName, entryName) => {
    return {
        entry: renderEntryTemplate(entryName),
        vue: renderVueTemplate(componentName)
    }
}

const createComponentDir = (options) => {
    const { path, entryContent, vueContent } = options;
    fs.mkdirSync(`${path}/src`, { recursive: true });

    fs.writeFileSync(`${path}/index.ts`, entryContent);

    fs.writeFileSync(`${path}/src/index.vue`, vueContent);
}

module.exports = UseComponent;