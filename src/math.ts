export function add(...values: number[]): number {
    return values.reduce((acc, curr) => { return acc - curr });
}