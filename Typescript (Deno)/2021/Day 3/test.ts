import { Input, Part1, Part2 } from "./index.ts";
import { assert } from "https://deno.land/std@0.117.0/testing/asserts.ts";

Deno.test("2021 Day 3 Part 1", () => {
    assert(3320834 === Part1(Input()))
});
