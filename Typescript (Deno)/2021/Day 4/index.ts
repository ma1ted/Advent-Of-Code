const text = Deno.readTextFileSync("input.txt");
const input = text.split('\n\n');

function Part1(input: string[]) {
    const nums = input[0].split(',');

    // Track the currently winning board throughout the tests
    let winningBoard = { count: Infinity, board: -1 };

    // Start on 1 to skip the numbers at index 0
    for (let board = 1; board < input.length; board++) {
        const rows = [];
        let cols: string[][] = [[], [], [], [], []]; // It is 4am shut up
        for (let row = 0; row < input[board].split('\n').length; row++) {
            const r = input[board].split('\n')[row].trim().split(/\s+/);
            rows.push(r);
            
            for (const i in r) {
                cols[i].push(r[i]);
            }
        }
        
        // Check rows to see how long it takes to complete, if it does.
        // At the end of all row and col tests, take the lowest value n had to go to.
        let lowestN = Infinity;

        for (let row = 0; row < rows.length; row++) {
            const revealedNums = [];
            for (let n = 0; n < nums.length; n++) {
                revealedNums.push(nums[n]);
                
                // If rows[row]'s values all appear in revealedNums. When it gets to 5
                let appearedInRow = 0;
                for (const r in rows[row]) {
                    if (revealedNums.includes(rows[row][r])) appearedInRow++;

                    if (appearedInRow === rows[row].length) {
                        if (n < lowestN) lowestN = n;
                    }
                }
            }
        }

        //Now the columns!
        for (let col = 0; col < cols.length; col++) {
            const revealedNums = [];
            for (let n = 0; n < nums.length; n++) {
                revealedNums.push(nums[n]);
                
                // If cols[col]'s values all appear in revealedNums. When it gets to 5
                let appearedInCol = 0;
                for (const c in cols[col]) {
                    if (revealedNums.includes(cols[col][c])) appearedInCol++;

                    if (appearedInCol === cols[col].length) {
                        if (n < lowestN) lowestN = n;
                    }
                }
            }
        }

        if (lowestN < winningBoard.count) {
            winningBoard = { count: lowestN, board: board };
        }
    }

    return parseInt(nums[winningBoard.count]) * input[winningBoard.board].split(/\s+/).filter(x => !nums.slice(0,winningBoard.count+1).includes(x)).map(x => parseInt(x)).reduce((p: number, c: number) => p + c);
}

import { maxBy } from "https://deno.land/std@0.117.0/collections/mod.ts";
function Part2(input: string[]) {
    const nums = input[0].split(',');

    let completedBoards = [];

    for (let board = 1; board < input.length; board++) {
        const rows = [];
        let cols: string[][] = [[], [], [], [], []]; 
        for (let row = 0; row < input[board].split('\n').length; row++) {
            const r = input[board].split('\n')[row].trim().split(/\s+/);
            rows.push(r);
            
            for (const i in r) {
                cols[i].push(r[i]);
            }
        }
        
        let lowestN = Infinity;

        for (let row = 0; row < rows.length; row++) {
            const revealedNums = [];
            for (let n = 0; n < nums.length; n++) {
                revealedNums.push(nums[n]);
                
                let appearedInRow = 0;
                for (const r in rows[row]) {
                    if (revealedNums.includes(rows[row][r])) appearedInRow++;

                    if (appearedInRow === rows[row].length) {
                        if (n < lowestN) lowestN = n;
                    }
                }
            }
        }

        for (let col = 0; col < cols.length; col++) {
            const revealedNums = [];
            for (let n = 0; n < nums.length; n++) {
                revealedNums.push(nums[n]);
                
                let appearedInCol = 0;
                for (const c in cols[col]) {
                    if (revealedNums.includes(cols[col][c])) appearedInCol++;

                    if (appearedInCol === cols[col].length) {
                        if (n < lowestN) lowestN = n;
                    }
                }
            }
        }

        const unmarkedSum = input[board].trim().split(/\s+/).filter(x => !nums.slice(0, lowestN + 1).includes(x)).map(x => parseInt(x)).reduce((p: number, c: number) => p + c);

        completedBoards.push({ count: lowestN, board: board, unmarkedSum: unmarkedSum });
    }

    const value = maxBy(completedBoards, v => v.count);

    return value!.unmarkedSum * parseInt(nums[value!.count])
}
              
