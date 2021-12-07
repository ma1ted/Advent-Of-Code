import { Input, Part1 } from "./index.ts";
import { assert } from "https://deno.land/std@0.117.0/testing/asserts.ts";

Deno.test("2021 Day 6 Part 1", () => {
    assert(352195 === Part1(Input()))
});
