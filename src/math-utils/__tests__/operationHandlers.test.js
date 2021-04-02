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
});
