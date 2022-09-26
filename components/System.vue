<template>
    <div></div>
    <Body v-for="item of time.system.bodies" :body="item"/> 
</template>

<script setup lang="ts">

    const system = new System([]);
    
    const body1 = new Body(
        'black',
        new Vector2(10, 10),
        new Vector2(0, 0),
        Math.pow(12, 14),
        50,
        Math.pow(10, 15),
        new GravitationalField()
    )

    const body2 = new Body(
        'black',
        new Vector2(40, 40),
        new Vector2(0, 0),
        Math.pow(10, 12),
        5,
        Math.pow(10, 15),
        new GravitationalField()
    )

    const body25 = new Body(
        'black',
        new Vector2(50, 50),
        new Vector2(0, 0),
        Math.pow(12, 12),
        10,
        Math.pow(10, 15),
        new GravitationalField()
    )

    const body3 = new Body(
        'white',
        new Vector2(60, 15),
        new Vector2(-5, 0),
        Math.pow(11, 12),
        5,
        Math.pow(10, 15),
        new PassiveField()
    )

    const body4 = new Body(
        'white',
        new Vector2(15, 60),
        new Vector2(0, -5),
        Math.pow(11, 12),
        5,
        Math.pow(10, 15),
        new PassiveField()
    )

    const body5 = new Body(
        'white',
        new Vector2(55, 20),
        new Vector2(-5, 0),
        Math.pow(11, 12),
        5,
        Math.pow(10, 15),
        new PassiveField()
    )

    const body6 = new Body(
        'white',
        new Vector2(20, 55),
        new Vector2(0, -5),
        Math.pow(11, 12),
        5,
        Math.pow(10, 15),
        new PassiveField()
    )

    const body7 = new Body(
        'white',
        new Vector2(65, 30),
        new Vector2(-5, 0),
        Math.pow(11, 12),
        5,
        Math.pow(10, 15),
        new PassiveField()
    )

    const body8 = new Body(
        'white',
        new Vector2(30, 65),
        new Vector2(0, -5),
        Math.pow(11, 12),
        5,
        Math.pow(10, 15),
        new PassiveField()
    )
    const time = reactive(new Time(system));
    system.addBody(body1);
    system.addBody(body2);
    system.addBody(body25)
    system.addBody(body3);
    system.addBody(body4);
    system.addBody(body5);
    system.addBody(body6);
    system.addBody(body7);
    system.addBody(body8);

    system.changeScale(10);
    time.timeScale = 1;
    time.start();
</script>

<style scoped>
    #system{
        background-color: black;
    }
</style>