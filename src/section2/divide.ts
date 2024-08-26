export class ZeroDivisorError extends Error {}

export function divide(divided: number, divisor: number) {
  if (divisor === 0) throw new ZeroDivisorError("0で割ることはできません");
  return divided / divisor;
}
