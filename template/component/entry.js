/*
 * @Author: maggot-code
 * @Date: 2021-07-06 13:52:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-06 14:32:39
 * @Description: file content
 */
module.exports = (name) =>
    `
import type { App } from 'vue';
import ${name} from './src/index.vue';

${name}.install = (app: App): void => {
    const { name } = ${name};

    app.component(name, ${name});
}

export default ${name};
`;