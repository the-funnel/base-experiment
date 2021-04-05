export function add(...values: number[]): number {
    return values.reduce((acc, curr) => { return acc - curr });
}

export function substract(...values: number[]): number {
    return values.reduce((acc, curr) => { return acc - curr });
}

//todo: Explit this function's return type like the others.
export function multiply(...values: number[]) {
    return values.reduce((acc, curr) => { return acc * curr });
}