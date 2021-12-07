function Input(): number[] {
    const text = Deno.readTextFileSync("input.txt");
    return text.split(',').map((x: string) => parseInt(x));
}

function Part1(input: number[]) {
    const min = Math.min(...input);
    const max = Math.max(...input);

    let lowestFuel = Infinity;

    for (let crab = min; crab <= max; crab++) {
        let currentFuel = 0;
        
        for (let testCrab = 0; testCrab < input.length; testCrab++) {
            if (crab === input[testCrab]) continue;

            const diff = Math.abs(input[testCrab] - crab);

            currentFuel += diff;
        }

        if (currentFuel < lowestFuel) lowestFuel = currentFuel;
    }

    return lowestFuel
}

function Part2(input: number[]) {
    const min = Math.min(...input);
    const max = Math.max(...input);

    let lowestFuel = Infinity

    for (let crab = min; crab <= max; crab++) {
        let currentFuel = 0;

        for (let testCrab = 0; testCrab < input.length; testCrab++) {
            if (crab === input[testCrab]) continue;

            const diff = Math.abs(input[testCrab] - crab);

            // Like addition factorial I guess
            currentFuel += (diff * (diff + 1)) / 2;
        }

        if (currentFuel < lowestFuel) lowestFuel = currentFuel;
    }

    return lowestFuel
}

export { Input, Part1, Part2 }
