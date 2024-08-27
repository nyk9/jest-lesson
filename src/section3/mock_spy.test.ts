import { Calculator } from "./mock_spy";

it("sumメソッドが呼び出される", () => {
  const calculator = new Calculator();
  const sumSpy = jest.spyOn(calculator, "sum");
  const result = calculator.sum(1, 2);
  expect(result).toBe(3);
  expect(sumSpy).toHaveBeenCalledTimes(1);
  expect(sumSpy).toHaveBeenCalledWith(1, 2);

  sumSpy.mockRestore();
});
