//Tests for body class methods using jest

import {expect, test} from '@jest/globals';
import { Body } from './Body';
import { PassiveField } from './ForceField';
import { Operations } from './Operations';
import { Vector2 } from './Vector2';

test('Should move', () => {
    let body = new Body(
        "black",
        new Vector2(0,0),
        new Vector2(1,1),
        1,
        1,
        1,
        new PassiveField()
    );
    let dt = 1;
    body.move(dt);
    let isRight = Operations.equal(body.position, new Vector2(1, 1));
    expect(isRight).toBe(true);
});

// test('Should receive force', ()=>{
//     let body = new Body(
//         new Vector2(0,0),
//         new Vector2(1,1),
//         1,
//         1,
//         1,
//         new PassiveField()
//     );
//     let force = new Vector2(1,1);
//     body.receiveForce(force);
//     let isRight = Operations.equal(body.velocity, new Vector2(1,1));
// })