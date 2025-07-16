  const romanNumerals = [
    { value: 1000, roman: 'M' },
    { value: 900, roman: 'CM' },
    { value: 500, roman: 'D' },
    { value: 400, roman: 'CD' },
    { value: 100, roman: 'C' },
    { value: 90, roman: 'XC' },
    { value: 50, roman: 'L' },
    { value: 40, roman: 'XL' },
    { value: 10, roman: 'X' },
    { value: 9, roman: 'IX' },
    { value: 5, roman: 'V' },
    { value: 4, roman: 'IV' },
    { value: 1, roman: 'I' }
  ];

const convertToRoman = (num) => {
  let result = '';

  for (let i = 0; i < romanNumerals.length; i++) {
    if (num >= romanNumerals[i].value) {
      let repeatCount = Math.floor(num / romanNumerals[i].value);
      result += romanNumerals[i].roman.repeat(repeatCount);
      num -= romanNumerals[i].value * repeatCount;
    }
  }
  return result;
};

const romanToNumbers = (str) => {
  let result = 0;
  str = str.toUpperCase()
  
  for (let i = 0; i < romanNumerals.length; i++) {
    if (str.startsWith(romanNumerals[i].roman)) {
      result += romanNumerals[i].value;
      str = str.slice(romanNumerals[i].roman.length);
      i--;
    }
  }
  return result;
}

function handleConvertToRoman() {
  const input = document.getElementById('numberInput').value;
  const resultEl = document.getElementById('romanResult');

  const num = parseInt(input);
  if (isNaN(num) || num <= 0 || num > 3999) {
    resultEl.textContent = 'Please enter a number between 1 and 3999';
  } else {
    resultEl.textContent = `Roman numeral: ${convertToRoman(num)}`;
  }
}

function handleConvertToNumber() {
  const input = document.getElementById('romanInput').value;
  const resultEl = document.getElementById('numberResult');

  if (!input.trim()) {
    resultEl.textContent = 'Please enter a Roman numeral';
    return;
  }

  const number = romanToNumbers(input);
  resultEl.textContent = `Converted number: ${number}`;
}