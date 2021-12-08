function Input(): number[] {
    const text = Deno.readTextFileSync("input.txt");
    return text.split('\n').map(x => parseInt(x));
}

function Part1(input: number[]): number {
    let largerMeasurements = 0;
    let previousDepth = Infinity;
    input.forEach(depth => {
        if (depth > previousDepth) largerMeasurements++;
        previousDepth = depth;
    });
    return largerMeasurements;
}

function Part2(input: number[]): number {
    const windowSize = 3;
    let largerWindows = 0;

    let previousWindowSum = 0;
    for (let depth = 0; depth < input.length; depth++) {

        // Check for end
        if (input[depth + windowSize] === undefined) return largerWindows;

        let currentWindowSum = 0;

        // Sum all depths in current window
        for (let d = 0; d < windowSize; d++) {
            currentWindowSum += input[depth + d];
        }

        if (currentWindowSum > previousWindowSum) largerWindows++;

        previousWindowSum = currentWindowSum;
    }

    return largerWindows
}

export { Input, Part1, Part2 }
