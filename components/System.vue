<template>
    <Body v-for="item of time.system.bodies" :body="item"/>
    
</template>

<script setup lang="ts">

    const system = new System([]);
    
    const body1 = new Body(
        'red',
        new Vector2(10, 10),
        new Vector2(0, 0),
        Math.pow(11, 14),
        50,
        100,
        new GravitationalField()
    )

    const body2 = new Body(
        'blue',
        new Vector2(40, 40),
        new Vector2(0, 0),
        10,
        10,
        10,
        new PassiveField
    )

    const time = reactive(new Time(system));
    system.addBody(body1);
    system.addBody(body2);
    time.start();
    
</script>

<style scoped>

</style>