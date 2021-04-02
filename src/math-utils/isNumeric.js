function isNumeric(str) {
  if (!/^(-+)?\d+(\.\d+)?$/.test(str)) return false;
  return Number.isFinite(parseFloat(str));
}

export default isNumeric;
