const text = Deno.readTextFileSync("input.txt");
const input = text.split('\n').map(x => parseInt(x));

function Part1(input: number[]): number {
    for (const el1 of input) {
        for (const el2 of input) {
            if (el1 + el2 === 2020) {
                return el1 * el2;
            }
        }
    }
}

function Part2(input: number[]): number {
    for (const el1 of input) {
        for (const el2 of input) {
            for (const el3 of input) {
                if (el1 + el2 + el3 === 2020) {
                    return el1 * el2 * el3;
                }
            }
        }
    }
}
