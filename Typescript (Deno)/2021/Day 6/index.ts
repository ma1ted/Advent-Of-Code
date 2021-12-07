const text = Deno.readTextFileSync("input.txt");
const input = text.split(',').map((x: string) => parseInt(x));

function Part1(input: number[]) {
    const days = 80;
    const fish: number[] = input;

    for (let day = 1; day < days + 1; day++) {
        const fishLengthAtStartOfDay = fish.length;

        for (let f = 0; f < fishLengthAtStartOfDay; f++) {
            fish[f]--;
            if (fish[f] < 0) {
                fish[f] = 6;
                fish.push(8);
            }
        }
    }
    
    return fish.length
}
