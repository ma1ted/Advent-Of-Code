function Input(): number[][] {
    const text = Deno.readTextFileSync("input.txt");
    return text.split('\n')
        .map(x => x.split(''))
        .map(x => x
            .map(y => parseInt(y))
        );
}

function Part1(input: number[][]): number {
    const riskLevels: number[] = [];

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {

            const current = input[row][col];

            const above = (row <= 0) ? Infinity : input[row - 1][col];
            const below = (row >= input.length - 1) ? Infinity : input[row + 1][col];
            const right = (col <= 0) ? Infinity : input[row][col - 1];
            const left = (col >= input[row].length - 1) ? Infinity : input[row][col + 1];
            
            const lowest = current < above && current < below && current < left && current < right;

            if (lowest) riskLevels.push(current + 1)
        }
    }

    return riskLevels.reduce((p: number, c: number) => p + c);
}

export { Input, Part1 }
