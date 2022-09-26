import { Time } from "../Time";

export function makeSunEarthMoonSystem(): Time{  
    const solarSystem = new System([]);
    let sun = new Body("yellow", new Vector2(0, 0), new Vector2(0, 0), 1.989 * Math.pow(10,30),  10*1392700, 1, new GravitationalField());
    let eath = new Body("blue", new Vector2(149600000, 0), new Vector2(0, 29780), 5.972 * Math.pow(10,24), 12742* 2, 1, new GravitationalField());
    let moon = new Body("white", new Vector2(149600000 + 384400, 0), new Vector2(0, 29780 + 1022), 7.34767309 * Math.pow(10,22), 1737000, 1, new GravitationalField());
    
    solarSystem.addBody(sun);
    solarSystem.addBody(eath);
    solarSystem.addBody(moon);

    const time = new Time(solarSystem);

    return time;
}

export function makeSolarSystem(): Time{
    const solarSystem = new System([]);
    const sun = new Body("Yellow", new Vector2(0, 0), new Vector2(0, 0), 1.989 * Math.pow(10,30),  696340000, 1, new GravitationalField());
    const mercury = new Body("Gray", new Vector2(57910000000, 0), new Vector2(0, 47870), 3.285 * Math.pow(10,23), 2439700, 1, new GravitationalField());
    const venus = new Body("Orange", new Vector2(108200000000, 0), new Vector2(0, 35020), 4.867 * Math.pow(10,24), 6051800, 1, new GravitationalField());
    const eath = new Body("Blue", new Vector2(149600000000, 0), new Vector2(0, 29780), 5.972 * Math.pow(10,24), 6371000, 1, new GravitationalField());
    const moon = new Body("White", new Vector2(149600000000 + 384400000, 0), new Vector2(0, 29780 + 1022), 7.34767309 * Math.pow(10,22), 1737000, 1, new GravitationalField());
    const mars = new Body("Red", new Vector2(227900000000, 0), new Vector2(0, 24130), 6.39 * Math.pow(10,23), 3389500, 1, new GravitationalField());
    const jupiter = new Body("Brown", new Vector2(778500000000, 0), new Vector2(0, 13070), 1.898 * Math.pow(10,27), 69911000, 1, new GravitationalField());
    const saturn = new Body("LightBrown", new Vector2(1433000000000, 0), new Vector2(0, 9690), 5.683 * Math.pow(10,26), 58232000, 1, new GravitationalField());
    const uranus = new Body("LightBlue", new Vector2(2877000000000, 0), new Vector2(0, 6810), 8.681 * Math.pow(10,25), 25362000, 1, new GravitationalField());

    solarSystem.addBody(sun);
    solarSystem.addBody(mercury);
    solarSystem.addBody(venus);
    solarSystem.addBody(eath);
    solarSystem.addBody(moon);
    solarSystem.addBody(mars);
    solarSystem.addBody(jupiter);
    solarSystem.addBody(saturn);
    solarSystem.addBody(uranus);

    const time = new Time(solarSystem);

    return time;
}

