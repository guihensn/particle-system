//test vector2 methods
import {expect, test} from '@jest/globals';
import {Vector2} from './Vector2';
import {Operations} from './Operations';

test('Should sum vectors correctly', () => {
    let v1 = new Vector2(1, 1);
    let v2 = new Vector2(1, 1);
    let sum = Operations.sum(v1, v2);
    let isRight = Operations.equal(sum, new Vector2(2, 2));
    expect(isRight).toBe(true);
});

test('Should sub vectors correctly', () => {
    let v1 = new Vector2(1, 1);
    let v2 = new Vector2(1, 1);
    let sub = Operations.sub(v1, v2);
    let isRight = Operations.equal(sub, new Vector2(0, 0));
    expect(isRight).toBe(true);
});

test('Should mul vectors correctly', () => {
    let v1 = new Vector2(1, 1);
    let mul = Operations.mul(v1, 2);
    let isRight = Operations.equal(mul, new Vector2(2, 2));
    expect(isRight).toBe(true);
});

test('Should normalize vectors correctly', () => {
    let v1 = new Vector2(1, 1);
    let normalized = Operations.normalize(v1);
    let isRight = Operations.equal(normalized, new Vector2(0.7071067811865475, 0.7071067811865475));
    expect(isRight).toBe(true);
});

test('Should calculate distance correctly', () => {
    let v1 = new Vector2(1, 1);
    let v2 = new Vector2(1, 1);
    let distance = Operations.distance(v1, v2);
    let isRight = distance == 0;
    expect(isRight).toBe(true);
});

test('Should compare vectors correctly', () => {
    let v1 = new Vector2(1, 1);
    let v2 = new Vector2(1, 1);
    let isRight = Operations.equal(v1, v2);
    expect(isRight).toBe(true);
});

