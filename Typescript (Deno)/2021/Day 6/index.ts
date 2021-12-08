function Input(): number[] {
    const text = Deno.readTextFileSync("Typescript (Deno)/2021/Day 6/input.txt");
    return text.split(',').map((x: string) => parseInt(x));
}

function Part1(input: number[]): number {
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

/// I tried to mitigate the huge memory alloc issue by using a string instead of a number[]. It didn't work. At about 300k string length it was taking a minute to process each lanternfish day.

// function Part2(input: number[]): number {
//     function setCharAt(str: string ,index: number, chr: string) {
//         if (index > str.length-1) return str;
//         return str.substring(0,index) + chr + str.substring(index+1);
//     }

//     const days = 256;
//     let fish: string = input.map(x => x.toString()).join('');

//     for (let day = 1; day < days + 1; day++) {
//         console.log(`Day: ${day}: ${fish.length}`);

//         const fishLengthAtStartOfDay = fish.length;
//         for (let char = 0; char < fishLengthAtStartOfDay; char++) {
//             if (parseInt(fish[char]) <= 0) {
//                 fish = setCharAt(fish, char, '6');
//                 fish += '8'
//             } else {
//                 fish = setCharAt(fish, char, (parseInt(fish[char])-1).toString());
//             }
//         }
//     }
    
//     return fish.length
// }

export { Input, Part1 }
