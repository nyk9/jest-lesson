// toThrow

import { divide, ZeroDivisorError } from "./divide";

it("0で割るとエラーが発生する", () => {
  expect(() => divide(10, 0)).toThrow(ZeroDivisorError);
  expect(() => divide(10, 0)).toThrow("0で割ることはできません");
  expect(() => divide(10, 0)).toThrow();
});
