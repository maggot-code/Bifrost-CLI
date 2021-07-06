#! /usr/bin/env node

/*
 * @Author: maggot-code
 * @Date: 2021-06-25 11:20:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-06 14:18:36
 * @Description: file content
 */
const { program } = require("commander");
const { version } = require('../package.json');

const UseShowConfig = require('../script/useShowConfig');
const UsePrefix = require('../script/usePrefix');
const UseResetConfig = require('../script/useResetConfig');
const UseSettemplate = require('../script/useSettemplate');
const UseDeltemplate = require('../script/useDeltemplate');
const UseComponent = require('../script/useComponent');

const { argv } = process;

program.name('bifrost').version(version, '-v --version').usage('<commdan> [options]');

// 查看配置文件内容
program.command('config').description('查看配置文件内容').action(UseShowConfig);

// 设置模板前缀
program.command('prefix <character>').description('设置模板前缀,用于区分工程或项目,<character> 推荐使用全小写字母').action(UsePrefix);

// 设置模板路径
program.command('settmp <dir>').description('设置模板保存路径,需要提供完整的绝对路径').action(UseSettemplate);

// 删除模板路径
program.command('deltmp').description('删除模板保存路径').action(UseDeltemplate);

// 重置配置文件
program.command('reset').description('重置配置文件').action(UseResetConfig);

// 生成组件模板
program.command('component <dir> <componentName>').description('生成组件模板,<componentName> 推荐全小写字母通过 “-” 相连').action(UseComponent);

// 设置需要解析的参数，省略参数，直接使用 process.argv
program.parse(argv);

// 没有参数的情况下，输出参数帮助文档
if (argv.slice(2).length <= 0) { program.outputHelp() }