import { Body } from "./Body";

export class System{
    bodies: Body[] = [];

    constructor(bodies: Body[]){
        this.bodies = bodies;
    }

    update(dt: number){
        this.interact(dt);
        this.move(dt);
    }

    addBody(body: Body){
        this.bodies.push(body);
    }

    move(dt: number){
        this.bodies.forEach((body) => {
            body.move(dt);
        });
    }

    interact(dt: number){
        this.bodies.forEach((agent: Body) => {
            this.bodies.forEach((receiver: Body) => {
                if(agent !== receiver){
                    agent.applyForceField(receiver, dt);

                    let colliding = agent.verifyCollision(receiver);
                    if(colliding){
                        agent.applyCollisionForce(receiver, dt);
                    }
                } 
            });
        });
    }
}






