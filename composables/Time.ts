import { System } from "./System";

export class Time{
    private dt = 0.01;
    
    system: System;
    interval: NodeJS.Timer;

    constructor(system: System){
        this.system = system;
    }

    start(){
        this.interval = setInterval(() => {
            this.system.update(this.dt);
        }, this.dt * 1000);
    }

    stop(){
        clearInterval(this.interval);
    }
}