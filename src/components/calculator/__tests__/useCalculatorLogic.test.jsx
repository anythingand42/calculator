import { renderHook, act } from '@testing-library/react-hooks';

import OperationEnum from '../../../math-utils/OperationEnum';
import { ActionEnum } from '../shared/const';
import useCalculatorLogic from '../useCalculatorLogic';

test('useCalculatorLogic hook', () => {
  const { result } = renderHook(() => useCalculatorLogic());

  expect(result.current[0].operandA).toBe('');
  expect(result.current[0].operandB).toBe('');
  expect(result.current[0].operation).toBe(OperationEnum.sum);
  expect(result.current[0].history.length).toBe(0);

  act(() => {
    result.current[1]({ type: ActionEnum.setOperandA, payload: '3' });
  });
  expect(result.current[0].operandA).toBe('3');

  act(() => {
    result.current[1]({ type: ActionEnum.setOperandB, payload: '2' });
  });
  expect(result.current[0].operandB).toBe('2');

  act(() => {
    result.current[1]({ type: ActionEnum.setOperation, payload: OperationEnum.sum });
  });
  expect(result.current[0].operation).toBe(OperationEnum.sum);

  act(() => {
    result.current[1]({ type: ActionEnum.calculate });
  });
  expect(result.current[0].history[0].result).toBe('5');
});
