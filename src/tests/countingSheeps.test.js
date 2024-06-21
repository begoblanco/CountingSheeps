import { describe, expect, it } from "vitest";
import { countSheeps } from "src/js/countingSheeps.js";

describe("countSheeps as function", () => {
  it("return the sum of all the true values in a given list ", () => {
    //Given
    const list1 = [true, true, true, false, true, true, true, true , true, false, true, false, true, false, false, true , true, true, true, true , false, false, true, true];
    const expected = "There are 17 sheep in total";
    //When
    const result = countSheeps(list1);
    //Then
    expect(result).toBeTypeOf("string");
    expect(result).toEqual(expected);
  });

  it("if all the elements in the list are false, it means a wolf has eaten the sheeps", () => {
    //Given
    const list2 = [false, false, false];
    const expected = "UPS!!! Wolfs eaten Sheeps"
    //When
    const result = countSheeps(list2);
    //Then
    expect(result).toBeTypeOf("string");
    expect(result).toEqual(expected);
  });

  it("not an boolean input case", () => {
    //Given
    const list3 = [true, true, "miau", false];
    const expected = "The list must contain only boolean values";
    //When
    const result = countSheeps(list3);
    //Then
    expect(result).toBeTypeOf("string");
    expect(result).toEqual(expected);
  });
});