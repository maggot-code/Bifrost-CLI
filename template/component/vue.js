/*
 * @Author: maggot-code
 * @Date: 2021-07-06 13:52:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-07-06 14:32:29
 * @Description: file content
 */
module.exports = (name) =>
    `
<template>
    <div class="${name}">${name}</div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
    name: "${name}",

    components: {},

    props: {},

    computed: {},

    setup() {},

    beforeCreate() {},

    created() {},
});
</script>
`;