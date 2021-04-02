import operationHandlers from '../operationHandlers';
import OperationEnum from '../OperationEnum';

describe('tests operation handlers', () => {
  it('tests sum', () => {
    [
      [2, 2, 4],
      [-500, 500, 0],
      [-500, -500, -1000],
      [6000, 2000, 8000],
    ].forEach((sample) => {
      expect(operationHandlers[OperationEnum.sum](sample[0], sample[1])).toBe(sample[2]);
    });
  });

  it('tests divide', () => {
    [
      [2, 2, 1],
      [-500, 500, -1],
      [-500, -500, 1],
      [6000, 2000, 3],
      [2, 0, Infinity],
    ].forEach((sample) => {
      expect(operationHandlers[OperationEnum.divide](sample[0], sample[1])).toBe(sample[2]);
    });
  });

  it('tests mod', () => {
    [
      [2, 2, 0],
      [-500, 500, -0],
      [-501, -500, -1],
      [6457, 2000, 457],
      [7, 6, 1],
      [298, 17, 9],
    ].forEach((sample) => {
      expect(operationHandlers[OperationEnum.mod](sample[0], sample[1])).toBe(sample[2]);
    });
  });

  it('tests maxPrimeBetween', () => {
    [
      [0, 0, null],
      [0, 1, null],
      [0, 2, 2],
      [1.5, 2.5, 2],
      [900, 3949.834, 3947],
      [9000, 23, null],
      [-9999, 2, 2],
      [-9999, 0, null],
    ].forEach((sample) => {
      expect(
        operationHandlers[OperationEnum.maxPrimeBetween](sample[0], sample[1]),
      ).toBe(sample[2]);
    });
  });
});
