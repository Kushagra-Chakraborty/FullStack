import { getargs } from "./function";

test("returns Guest when args is null", () => {
  expect(getargs(null)).toBe("Guest");
  expect(getargs("John")).toBe("John");
});
