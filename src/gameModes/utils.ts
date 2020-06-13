export const randomTime = () => {
    const num = Math.PI * Math.random() + 0.1;
    console.log(num);
    const time = num * 4000;
    console.log(time);
    return time;
};

type Point = {
    // type because it defines a return type
    x: number;
    y: number;
};

export const randomPosition = (): Point => {
    let x = Math.random() * 100;
    if (x > 90 || x < 10) {
        x = 0.23; // arbitrary
    }
    let y = Math.random() * 100;
    if (y > 90 || y < 10) {
        y = 0.46; // arbitrary
    }
    return { x: x, y: y };
};
