module.exports = function toReadable(number) {
  let result = '';
  const fromZeroToTwenty = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
  ];
  const tens = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  if (number <= 20) return fromZeroToTwenty[number];
  if (number > 20 && number < 100) {
    const tithe = tens[Math.floor(number / 10) - 2];
    const remainder = fromZeroToTwenty[number % 10].replace('zero', '');
    return `${tithe} ${remainder}`.trim();
  }
  if (number >= 100) {
    if (number % 100 < 21) {
      const hundredths = fromZeroToTwenty[Math.floor(number / 100)];
      const remainder = fromZeroToTwenty[number % 100].replace('zero', '');
      result = `${hundredths} hundred ${remainder}`.trim();
    } else {
      const hundredths = fromZeroToTwenty[Math.floor(number / 100)];
      const tithe = tens[(Math.floor(number / 10) % 10) - 2];
      const unit = fromZeroToTwenty[number % 10].replace('zero', '');
      result = `${hundredths} hundred ${tithe} ${unit}`.trim();
    }
  }
  return result;
};
