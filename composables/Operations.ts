import { Vector2 } from "./Vector2";

export class Operations{
    static sum(v1: Vector2, v2: Vector2): Vector2{
        return new Vector2(v1.x + v2.x, v1.y + v2.y);
    }

    static sub(v1: Vector2, v2: Vector2): Vector2{
        return new Vector2(v1.x - v2.x, v1.y - v2.y);
    }

    static mul(v1: Vector2, escalar: number): Vector2{
        return new Vector2(v1.x * escalar, v1.y * escalar);
    }

    static distance(v1: Vector2, v2: Vector2): number{
        return Math.sqrt(Math.pow(v1.x - v2.x, 2) + Math.pow(v1.y - v2.y, 2));
    }

    static normalize(v: Vector2): Vector2{
        const length = Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));
        return new Vector2(v.x / length, v.y / length);
    }

    static equal(v1: Vector2, v2: Vector2): boolean{
        return (v1.x == v2.x) && (v1.y == v2.y);
    }
}
