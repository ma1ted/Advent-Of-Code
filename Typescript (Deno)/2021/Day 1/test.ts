import { Input, Part1, Part2 } from "./index.ts";
import { assert } from "https://deno.land/std@0.117.0/testing/asserts.ts";

Deno.test("2021 Day 1 Part 1", () => {
    assert(1288 === Part1(Input()))
});

Deno.test("2021 Day 1 Part 2", () => {
    console.log("PART 2:");
    console.log(Part2(Input()))
    assert(1311 === Part2(Input()))
});
