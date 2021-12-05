const text = Deno.readTextFileSync("input.txt");
const input = text.split('\n');

function Part1(input: string[]) {
    let gamma = "";
    let epsilon = "";

    // Iterate over the columns on the top level, not the rows
    for (let bit = 0; bit < input[0].length; bit++) {

        // Could have counted the zeroes or the ones
        let oneCount = 0;

        // Now iterate over the rows
        for (let line = 0; line < input.length; line++) {
            if (input[line][bit] === '1') oneCount++;
        }

        // Append gamma and epsilon depending on the row's most and least commonly occuring bit respectively
        gamma += (oneCount > input.length / 2) ? '1' : '0';
        epsilon += (oneCount > input.length / 2) ? '0' : '1';
    }

    // Convert gamma and epsilon to base 10
    const gammaDec = parseInt(gamma, 2);
    const epsilonDec = parseInt(epsilon, 2);

    return gammaDec * epsilonDec;
}
