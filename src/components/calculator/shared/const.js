import OperationEnum from '../../../math-utils/OperationEnum';

export const ActionEnum = {
  setOperation: 0,
  setOperandA: 1,
  setOperandB: 2,
  calculate: 3,
};

export const operations = {
  [OperationEnum.sum]: '+ (sum)',
  [OperationEnum.divide]: '/ (divide)',
  [OperationEnum.mod]: '% (mod)',
  [OperationEnum.maxPrimeBetween]: 'max prime between',
};
