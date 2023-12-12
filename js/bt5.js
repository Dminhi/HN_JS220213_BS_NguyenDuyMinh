function reverseString() {
    let input = document.getElementById("textInput").value;
    let result = input
        .split(/\s+/)
        .map((word) => word.split("").reverse().join(""))
        .join(" ");

    let resultElement = document.getElementById("result");
    resultElement.textContent =
        "Chuỗi đã được đảo ngược các thành phần là: " + result;
}