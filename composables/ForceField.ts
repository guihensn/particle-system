import { Body } from "./Body";
import { Operations } from "./Operations";
import { Vector2 } from "./Vector2";

export interface ForceField{
    apply(body1: Body, body2: Body, dt: number);
}

export class PassiveField implements ForceField{
    apply(body1: Body, body2: Body, dt: number){}
}

export class GravitationalField implements ForceField{
   readonly CONSTANT: number = 6.67408 * Math.pow(10, -11);

   apply(agent: Body, receiver: Body, dt: number){
        const distance = Operations.distance(agent.position, receiver.position);
        const force = this.CONSTANT * ((agent.mass * receiver.mass) / Math.pow(distance, 2));
        const direction = Operations.normalize(Operations.sub(agent.position, receiver.position));
        const forceVector =  Operations.mul(direction, force);
        receiver.receiveForce(forceVector, dt);
    }
}

export class ConstantField implements ForceField{
    readonly force: Vector2;

    constructor(force: Vector2){
        this.force = force;
    }

    apply(body1: Body, body2: Body, dt: number){
        body2.receiveForce(this.force, dt);
    }
}
