function isNumeric(str) {
  return /^(-+)?\d+(\.\d+)?$/.test(str);
}

export default isNumeric;
