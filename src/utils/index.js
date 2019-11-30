export const toNumber = string => +string.split(',').join('.');

export const roundValue = value => {
  if (typeof +value !== 'number') return value;

  const symbols = value.split('');
  switch (symbols.length) {
    case 4:
      return symbols[0] + (symbols[1] === '0' ? '' : ',' + symbols[1]) + 'k';
    case 5:
      return symbols[0] + symbols[1] + 'k';
    case 6:
      return symbols[0] + symbols[1] + symbols[2] + 'k';
    case 7:
      return symbols[0] + (symbols[1] === '0' ? '' : ',' + symbols[1]) + 'kk';
    case 8:
      return symbols[0] + symbols[1] + 'kk';
    case 9:
      return symbols[0] + symbols[1] + symbols[2] + 'kk';
    default:
      return value;
  }
};
