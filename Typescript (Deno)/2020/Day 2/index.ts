const text = await Deno.readTextFile("input.txt");
const input = text.split('\n');

function Day1(input: string[]) {
    let totalCount = 0;

    input.forEach(line => {
        const lineSplit = line.split(' ');

        const bounds = lineSplit[0].split('-').map(x => parseInt(x));
        const targetChar = lineSplit[1][0];
        const passwordSplit = lineSplit[2].split('');

        const foundMatches = passwordSplit.filter(letter => letter === targetChar);

        if (foundMatches.length >= bounds[0] && foundMatches.length <= bounds[1]) totalCount++;
    });

    return totalCount;
}

function Day2(input: string[]) {
    let totalCount = 0;

    input.forEach(line => {
        const lineSplit = line.split(' ');

        const bounds = lineSplit[0].split('-').map(x => parseInt(x));
        const targetChar = lineSplit[1][0];
        const passwordSplit = lineSplit[2].split('');

        const boundToPasswordChars = bounds.map(bound => passwordSplit[bound-1]);

        const foundMatches = boundToPasswordChars.filter(char => char === targetChar);

        if (foundMatches.length === 1) totalCount++;
    });

    return totalCount;
}
