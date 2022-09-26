import { ForceField, PassiveField } from "./ForceField";
import { Operations } from "./Operations";
import { Vector2 } from "./Vector2";

export class Body{
    background: string = "black";

    mass: number = 1;
    size: number = 1;

    position = new Vector2(0,0);
    velocity = new Vector2(0,0);
  
    private forceField: ForceField = new PassiveField();
    
    elasticity: number;

    constructor(background: string, position: Vector2, velocity: Vector2, mass: number, size: number, elasticity: number, forceField: ForceField){
        this.background = background;
        this.position = position;
        this.velocity = velocity;
        this.mass = mass;
        this.size = size;
        this.elasticity = elasticity;
        this.forceField = forceField;
    }

    move(dt: number){
        this.position.x += this.velocity.x * dt;
        this.position.y += this.velocity.y * dt;
    }

    receiveForce(force: Vector2, dt: number){
        this.velocity.x += dt * force.x / this.mass;
        this.velocity.y += dt * force.y / this.mass;
    }
    
    verifyCollision(other: Body){
        let distance = Operations.distance(this.position, other.position);
        
        if(this.size / 2 + other.size / 2 > distance ){
            return true;
        }

        return false;
    }

    applyForceField(other: Body, dt: number){
        this.forceField.apply(this, other, dt);
    }

    applyCollisionForce(other: Body, dt: number){
        const distance = Operations.distance(this.position, other.position);
        const direction = Operations.normalize(Operations.sub(this.position, other.position));
        const force = Operations.mul(direction, -(this.size / 2 + other.size / 2 - distance) * this.elasticity);
        other.receiveForce(force, dt);
    }
}