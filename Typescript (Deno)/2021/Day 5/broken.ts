// deno-lint-ignore-file

function Input() {
    const text = Deno.readTextFileSync("input.txt");
    const input = text.split("\n");
}

function Part1(input: string[]) {
    const coords = input.map(i => i
        .split(" -> ")
        .map(j => j
            .split(",")
            .map(k => parseInt(k))
        )
    );
    console.log(coords);

    const intersections: any = [];

    for (let pair1 = 0; pair1 < coords.length; pair1++) {
        // Skip if the line is sloped
        if (coords[pair1][0][1] !== coords[pair1][1][1] &&
            coords[pair1][0][0] !== coords[pair1][1][0]
        ) continue;

        // If the y coords are the same, the line must be vertical. Otherwise the line is horizontal.
        const line1Vertical = coords[pair1][0][0] === coords[pair1][1][0];

        for (let pair2 = 0; pair2 < coords.length; pair2++) {
            // Skip if the line is sloped
            if (coords[pair2][0][1] !== coords[pair2][1][1] &&
                coords[pair2][0][0] !== coords[pair2][1][0]
            ) continue;

            // Skip if they are the same lines
            if (pair1 === pair2) continue;

            const line2Vertical = coords[pair2][0][0] === coords[pair2][1][0];

            // Skip if the lines are parallel
            if (line1Vertical === line2Vertical) continue;

            let intersection = [
                coords[line1Vertical? pair1 : pair2][0][0],
                coords[line1Vertical? pair2 : pair1][0][1]
            ];
            
            intersections.push(intersection);
        }
    }
    
    const uniqueIntersections = intersections //element, index, array
        .map((ar: number[]) => JSON.stringify(ar))
        .filter((itm: any, idx: any, arr: any) => arr.indexOf(itm) === idx)
        .map((str: string) => JSON.parse(str));

    return uniqueIntersections.length
}

export { Input, Part1 }
