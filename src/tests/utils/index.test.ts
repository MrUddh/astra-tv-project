import { expect, test } from "vitest";
import { getRatingStars, logErrorToService } from "../../utils";

test("logs error to service without throwing", () => {
  const error = new Error("Test error");
  expect(() => logErrorToService(error)).not.toThrow();
});

test("Returns 5 stars", () => {
  expect(getRatingStars(5)).toBe("★★★★★");
});
test("Returns 2 stars and 3 empty", () => {
  expect(getRatingStars(2)).toBe("★★☆☆☆");
});
