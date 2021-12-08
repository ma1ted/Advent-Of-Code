function Input(): string[] {
    const text = Deno.readTextFileSync("input.txt");
    return text.split('\n');
}

function Part1(input: string[]): number {
    const incrementCount = 3;
    let treeCount = 0;
    let previousX = -incrementCount;

    input.forEach(row => {
        let currentX = previousX + incrementCount;
        if (currentX > row.length - 1) currentX -= row.length;
        if (row[currentX] === '#') treeCount++;
        previousX = currentX;
    });
    return treeCount;
}

function Part2(input: string[]) {
    // Track the number of trees encountered across different slope tests
    const trees: number[] = [];

    // The slopes to test
    const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

    slopes.forEach(slope => {
        // The number of trees encountered on the current slope
        let treeCount = 0;

        // The position along the previously tested row
        // The inital value is -slope[0] so the first loop iteration starts on 0
        let previousX = -slope[0];

        // The position along the current row
        let currentX = 0;

       for (let row = 0; row < input.length; row++) {
           // Accounts for row skips, eg in "down 2" instructions every other row is skipped
           if (row % slope[1] !== 0) continue;

            // Advance along the row by the required amount
           currentX = previousX + slope[0];

            // Loop to start of row if there is overflow
           if (currentX > input[row].length - 1) currentX -= input[row].length;

           // Detect tree
           if (input[row][currentX] === '#') treeCount++;

            // Set previousX ready for the next iteration
           previousX = currentX;
        }
        
        // Push the number of trees encountered on this slope to the total array;
        trees.push(treeCount)
    });

    // Multiply all the trees encountered across all the slopes
    const totalTrees = trees.reduce((p, c) => p * c);

    return totalTrees;
}
