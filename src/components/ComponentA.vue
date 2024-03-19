<template>
    <div class="componentA">
        {{ $attrs }}<br />
        ComponentA<br />
        {{ props.msg }}<br />
        <button @click="$emit('increaseBy', 2)">Increase by 2</button>
        <button @click="buttonClick">Increase by 1</button>

        <div @click="$attrs.onClick" :class="$attrs.class"><input type="text" v-model="title" /></div>

        <div>
            <slot text="default"></slot>
        </div>
        <div class="test">
            <slot name="test" text="test"></slot>
        </div>

        <button @click="updateLocation">{{ location }}</button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, defineModel, defineOptions, useAttrs, inject } from 'vue';

const props = defineProps(["msg"]);
const emit = defineEmits(['increaseBy']);
const title = defineModel('title')
const attrs = useAttrs();
console.log(attrs, 'attrs');
const { location, updateLocation } = inject('location')

defineOptions({
    // inheritAttrs: false, // 禁止 Attributes 继承
})

function buttonClick() {
    emit('increaseBy', 1)
}
</script>

<style lang="scss" scoped>
.componentA {
    padding: 0 30px;
}
</style>