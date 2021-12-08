function Input(): string[] {
    const text = Deno.readTextFileSync("Typescript (Deno)/2021/Day 3/input.txt");
    return text.split('\n');
}

function Part1(input: string[]): number {
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

// function Part2(input: string[]) {
//     // Create copies of input as to not mutate it
//     let o2Rating: string[] = input;
//     let co2Rating: string[] = input;

//     for (let bit = 0; bit < input[0].length; bit++) {
//         let o2OneCount = 0;
//         let co2OneCount = 0

//         for (let line = 0; line < o2Rating.length; line++) {
//             if (o2Rating[line][bit] === '1') o2OneCount++;
//         }
//         for (let line = 0; line < co2Rating.length; line++) {
//             if (co2Rating[line][bit] === '1') co2OneCount++;
//         }
        
//         // Filter bad values out of arrays
//         // Keeps value if test passes

//         // O2 wants to get rid of the type of bit that occurs the most
//         // If equal pass 1
//         // o2 test => if (1 occurs most) x => bit === '1' else x => bit === '0'
//         if (o2Rating.length !== 1) o2Rating = o2Rating.filter(x => x[bit] === ((o2OneCount < o2Rating.length / 2)? '0': '1'));

//         // CO2 wants to get rid of the type of bit that occurs the least
//         // If equal pass 0
//         // co2 test => if (0 occurs most) x => bit === '1' else x => bit === '0'
//         if (co2Rating.length !== 1) co2Rating = co2Rating.filter(x => x[bit] === ((co2OneCount > co2Rating.length / 2)? '0': '1'));

//     }
    
//     // Convert the results to base 10
//     const o2Dec = parseInt(o2Rating[0], 2);
//     const co2Dec = parseInt(co2Rating[0], 2);

//     return o2Dec * co2Dec
// }

export { Input, Part1 }
