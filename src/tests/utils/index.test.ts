import { expect } from "vitest";
import { getRatingStars, logErrorToService } from "../../utils";

describe("Utils", () => {
  it("logs error to service", () => {
    const consoleLogMock = vi
      .spyOn(console, "log")
      .mockImplementation(() => undefined);

    const consoleErrorMock = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined);

    const error = new Error();
    logErrorToService(error);
    expect(consoleLogMock).toHaveBeenCalledWith("Error logged to service");

    consoleLogMock.mockRestore();
    consoleErrorMock.mockRestore();
  });

  it("throws an error", () => {
    const error = new Error("Test error");
    const fn = () => {
      throw error;
    };
    expect(fn).toThrowError("Test error");
  });
  it("Returns 5 stars", () => {
    expect(getRatingStars(5)).toBe("★★★★★");
  });
  it("Returns 2 stars and 3 empty", () => {
    expect(getRatingStars(2)).toBe("★★☆☆☆");
  });
});
