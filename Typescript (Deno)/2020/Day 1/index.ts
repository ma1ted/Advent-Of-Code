function Input(): number[] {
    const text = Deno.readTextFileSync("./input.txt");
    return text.split('\n').map(x => parseInt(x));
}

function Part1(input: number[]): number {
    let result = -1;

    for (const el1 of input) {
        for (const el2 of input) {
            if (el1 + el2 === 2020) {
                result = el1 * el2;
            }
        }
    }

    return result;
}

function Part2(input: number[]): number {
    let result = -1;

    for (const el1 of input) {
        for (const el2 of input) {
            for (const el3 of input) {
                if (el1 + el2 + el3 === 2020) {
                    result = el1 * el2 * el3;
                }
            }
        }
    }

    return result;
}

export { Input, Part1, Part2 }
