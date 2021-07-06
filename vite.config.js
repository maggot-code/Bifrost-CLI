/*
 * @Author: maggot-code
 * @Date: 2021-06-25 11:21:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-06-25 11:27:46
 * @Description: file content
 */
import { defineConfig } from "vite";
import path from 'path';

// 解析路径
const resolvePath = (dir) => path.resolve(__dirname, dir);

// 路径别名
const alias = {
    "@": resolvePath('bin'),
    "@script": resolvePath("script"),
    "@tmp": resolvePath("template"),
};

// 省略文件扩展名
const extensions = ["index.js", "index.json", ".js", ".json"];

// 打包库
const buildLib = {
    entry: resolvePath('bin/index.js'),
    name: "BifrostCLI"
};

// rollup配置参数
const rollupOptions = {};

// rollup 简洁打包设置
const terserOptions = {};

// https://vitejs.dev/config/
export default defineConfig({
    logLevel: 'info',
    clearScreen: false,
    build: {
        target: "esnext",
        outDir: "dist",
        minify: "terser",
        assetsInlineLimit: 1024 * 4,
        sourcemap: true,
        lib: buildLib,
        rollupOptions,
        terserOptions
    },
    resolve: {
        alias,
        extensions
    },
})