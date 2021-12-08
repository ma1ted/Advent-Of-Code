import { Input, Part1, Part2 } from "./index.ts";
import { assert } from "https://deno.land/std@0.117.0/testing/asserts.ts";

Deno.test("2020 Day 1 Part 1", () => {
    assert(964875 === Part1(Input()))
});

Deno.test("2020 Day 1 Part 2", () => {
    assert(158661360 === Part2(Input()))
});
