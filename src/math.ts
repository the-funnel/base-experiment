export function add(...values: number[]): number {
    return values.reduce((acc, curr) => { return acc + curr });
}

export function substract(...values: number[]): number {
    return values.reduce((acc, curr) => { return acc - curr });
}

export function multiply(...values: number[]) {
    return values.reduce((acc, curr) => { return acc * curr });
}

export function divide(...values: number[]): number {
    return values.reduce((acc, curr) => { return acc / curr });
}

export function factorial(value: number): number {
    return value ? (value * factorial(value - 1)) : 1
}