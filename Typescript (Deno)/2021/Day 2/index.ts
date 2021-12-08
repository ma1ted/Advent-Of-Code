function Input(): string[] {
    const text = Deno.readTextFileSync("Typescript (Deno)/2021/Day 2/input.txt");
    return text.split('\n');
}

function Part1(input: string[]): number {
    let horPos = 0;
    let depth = 0;
    
    input.forEach(line => {
        const split = line.split(' ');
        const units = parseInt(split[1]);
        switch (split[0]) {
            case "forward":
                horPos += units;
                break;
            case "down":
                depth += units;
                break;
            case "up":
                depth -= units;
                break;
        }
    });

    return horPos * depth;
}

function Part2(input: string[]): number {
    let horPos = 0;
    let depth = 0;
    let aim = 0;

    input.forEach(line => {
        const split = line.split(' ');
        const units = parseInt(split[1]);
        switch (split[0]) {
            case "forward":
                horPos += units;
                depth += units * aim;
                break;
            case "down":
                aim += units;
                break;
            case "up":
                aim -= units;
                break;
        }
    });

    return horPos * depth;
}

export { Input, Part1, Part2 }
