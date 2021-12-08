import { Input, Part1, Part2 } from "./index.ts";
import { assert } from "https://deno.land/std@0.117.0/testing/asserts.ts";

Deno.test("2021 Day 4 Part 1", () => {
    assert(38594 === Part1(Input()))
});

Deno.test("2021 Day 4 Part 2", () => {
    assert(21184 === Part2(Input()))
});
