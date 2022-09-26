<template>
    <div id="body"></div>
</template>

<script setup lang="ts">
import { Body } from '~~/composables/Body';

const props = defineProps<{
    body: Body;
}>()

let xPos = computed(() => props.body.position.x - props.body.size / 2 + 'px');
let yPos = computed(() => props.body.position.y - props.body.size / 2 + 'px');
let size = computed(() => props.body.size + 'px');
let background= computed(() => props.body.background);

</script>

<style scoped>
    #body{
        border-radius: 100%;

        position: absolute;

        top: v-bind(yPos);
        left: v-bind(xPos);

        width: v-bind(size);
        height: v-bind(size);

        background-color: v-bind(background);
    }
</style>