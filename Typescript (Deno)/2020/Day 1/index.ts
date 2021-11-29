const text = await Deno.readTextFile("input.txt");
const input = text.split('\n').map(x => parseInt(x));

function Day1(input: number[]) {
    for (let el1 of input) {
        for (let el2 of input) {
            if (el1 + el2 === 2020) {
                return el1 * el2;
            }
        }
    }
}

function Day2(input: number[]) {
    for (let el1 of input) {
        for (let el2 of input) {
            for (let el3 of input) {
                if (el1 + el2 + el3 === 2020) {
                    return el1 * el2 * el3;
                }
            }
        }
    }
}
