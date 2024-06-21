import { describe, expect, it } from "vitest";
import { arrSum } from "./src/js/arrayPlusArray.js";

describe("arrSum as function", () => {
  it("return the sum of all the elements of two arrays", () => {
    //Given
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const expected = 21;
    //When
    const result = arrSum(arr1, arr2);
    //Then
    expect(result).toBeTypeOf("number");
    expect(result).toEqual(expected);
  });

  it("return the sum of all the elements of two arrays with negative numbers", () => {
    //Given
    const arr1 = [-1, -2, -3];
    const arr2 = [-4, -5, -6];
    const expected = -21;
    //When
    const result = arrSum(arr1, arr2);
    //Then
    expect(result).toBeTypeOf("number");
    expect(result).toEqual(expected);
  });

  it("return the sum of all the elements of two arrays one using zeros", () => {
    //Given
    const arr1 = [0, 0, 0];
    const arr2 = [4, 5, 6];
    const expected = 15;
    //When
    const result = arrSum(arr1, arr2);
    //Then
    expect(result).toBeTypeOf("number");
    expect(result).toEqual(expected);
  });

  it("return the sum of all the elements of two arrays with large numbers", () => {
    //Given
    const arr1 = [100, 200, 300];
    const arr2 = [400, 500, 600];
    const expected = 2100;
    //When
    const result = arrSum(arr1, arr2);
    //Then
    expect(result).toBeTypeOf("number");
    expect(result).toEqual(expected);
  });

  it("not an integer input case", () => {
    //Given
    const arr1 = [1, 2, "miau"];
    const arr2 = [4, 5, 6];
    const expected = "The arrays must contain only integer numbers";
    //When
    const result = arrSum(arr1, arr2);
    //Then
    expect(result).toBeTypeOf("string");
    expect(result).toEqual(expected);
  });

  it("not an integer input case", () => {
    //Given
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5];
    const expected = "The arrays must be the same length";
    //When
    const result = arrSum(arr1, arr2);
    //Then
    expect(result).toBeTypeOf("string");
    expect(result).toEqual(expected);
  });
});