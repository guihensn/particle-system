<template>
  <h1 class="title">Particle system</h1>

  <div class="camera">
    <System/>
  </div>
</template>

<style >
  body{
    background-color: rgb(0, 0, 0);
    width: 100vw;
    height: 100vh;
  }

  .camera{
    position: relative;
    translate: 20vw 20vh;
  }

  .title{
    position: absolute;
    bottom: 2vh;

    font-size: 40px;
    
    width: 100%;
    text-align: center;
    color: white;
  }
</style>