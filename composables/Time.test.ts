import { Body } from './Body';
import { Vector2 } from './Vector2';
import {PassiveField, ConstantField} from './ForceField';;
import { System } from './System';
import { Time } from './Time';
import { Operations } from './Operations';

jest.useFakeTimers();

test('Should move correctly', () => {
    let moveDuration = 10;
    let maxError = 0.2;

    let body = new Body(
        "black",
        new Vector2(0,0),
        new Vector2(1,1),
        1,
        1,
        1,
        new PassiveField()
    );
 
    const system = new System(
        [body]
    );
    
    let time = new Time(system);

    let expectedPosition = linearMove(body, moveDuration); 
    
    time.start();
    jest.advanceTimersByTime(moveDuration * 1000);

    expect(Operations.distance(body.position, expectedPosition)).toBeLessThan(maxError);
})

test('Should handle forces correctly', () => {
    let gravity = new Vector2(0, -9.8)

    let body = new Body(
        "black",
        new Vector2(0,0),
        new Vector2(1,1),
        1,
        1,
        1,
        new PassiveField()
    );

    let constantGravitySource = new Body(
        "black",
        new Vector2(-999,-999),
        new Vector2(1,1),
        1,
        1,
        1,
        new ConstantField(gravity)
    );
 
    const system = new System(
        [body, constantGravitySource]
    );
    
    let time = new Time(system);
    
    let moveDuration = 10;
    let maxError = 0.5;
    let expectedPosition = uniformlyVariedMovement(body, gravity, moveDuration); 
    
    time.start();
    jest.advanceTimersByTime(moveDuration * 1000);
    
    expect(Operations.distance(body.position, expectedPosition)).toBeLessThan(maxError);
})

test('Should handle collision correctly', () => {
    let moveDuration = 10;
    let maxError = 0.1;

    let body1 = new Body(
        "black",
        new Vector2(-1,0),
        new Vector2(1,0),
        2,
        2,
        90,
        new PassiveField()
    );

    let body2 = new Body(
        "black",
        new Vector2(2,0),
        new Vector2(-1,0),
        1,
        1,
        90,
        new PassiveField()
    );
 
    const system = new System(
        [body1, body2]
    );
    
    let time = new Time(system);

    
    time.start();
    jest.advanceTimersByTime(moveDuration * 1000);


    let expectedVelocities = perfectElasticCollision(body1, body2);
    let errorBody1 = Operations.distance(body1.velocity, expectedVelocities[0]);
    let errorBody2 = Operations.distance(body1.velocity, expectedVelocities[1]);
    
    expect(body1.velocity.x).toBeLessThan(0);
    expect(body2.velocity.x).toBeGreaterThan(0);
})

function linearMove(body: Body, dt: number): Vector2{
    return Operations.sum(body.position, Operations.mul(body.velocity, dt));
}

function uniformlyVariedMovement(body: Body, gravityAceleration: Vector2, duration: number): Vector2{
    let velocity = Operations.sum(body.velocity, Operations.mul(gravityAceleration, duration / 2));
    let position = Operations.sum(body.position, Operations.mul(velocity, duration));
    return position;
}

function perfectElasticCollision(body1: Body, body2: Body): [Vector2, Vector2]{
    let massSum = body1.mass + body2.mass;
    let massDifference = body1.mass - body2.mass;

    let newVelocity1 = Operations.mul(Operations.sum(Operations.mul(body1.velocity, massDifference), Operations.mul(body2.velocity, 2 * body2.mass)), 1 / massSum);
    let newVelocity2 = Operations.mul(Operations.sum(Operations.mul(body2.velocity, massDifference), Operations.mul(body1.velocity, 2 * body1.mass)), 1 / massSum);

    return [newVelocity1 ,newVelocity2];
}
