function findNumber() {
  let input = document.getElementById("numberInput").value;
  let resultElement = document.getElementById("result");

  if (input.length !== 5 || !/^\d+$/.test(input)) {
    resultElement.textContent = "Nhập vào một chuỗi số nguyên có 5 chữ số.";
    return;
  }

  let uniqueDigits = new Set();
  let maxUniqueDigit = -1;

  for (let digit of input) {
    if (!uniqueDigits.has(digit)) {
      uniqueDigits.add(digit);
      maxUniqueDigit = Math.max(maxUniqueDigit, digit);
    }
  }

  if (maxUniqueDigit === -1) {
    resultElement.textContent = "Không có số duy nhất.";
  } else {
    resultElement.textContent = `Số lớn nhất và duy nhất là: ${maxUniqueDigit}`;
  }
}
