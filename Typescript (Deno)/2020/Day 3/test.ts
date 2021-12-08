import { Input, Part1, Part2 } from "./index.ts";
import { assert } from "https://deno.land/std@0.117.0/testing/asserts.ts";

Deno.test("2020 Day 3 Part 1", () => {
    assert(220 === Part1(Input()))
});

Deno.test("2020 Day 3 Part 2", () => {
    assert(2138320800 === Part2(Input()))
});
