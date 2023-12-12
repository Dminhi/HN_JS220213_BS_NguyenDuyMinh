function remove() {
    let input = document.getElementById("textInput").value;
    let result = input.replace(/[0-9]/g, ""); // Sử dụng biểu thức chính quy để loại bỏ các ký tự số

    let resultElement = document.getElementById("result");
    resultElement.textContent = "Chuỗi kí tự đã xóa số là: " + result;
}