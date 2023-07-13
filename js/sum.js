/**
 * khối 1: input
 * nhập vào số có 2 chữ số
 * khối 2: tạo hàm
 * lấy giá trị từ form
 * lập công thức: số hàng chục = số có hai chữ số chia 10 và lấy phần nguyên
 * số hàng đơn vị = số có 2 chữ số chia 10 và lấy phần dư
 * tổng 2 ký số = số hàng chục + số hàng đơn vị
 * khối 3: output
 * tổng hai ký số
 */


function calSum() {
    var number = document.getElementById("inputNum").value;
    var soHangDonVi = number % 10 ;
    var soHangChuc = Math.floor(number / 10) ; 
    var Sum = soHangChuc + soHangDonVi;
document.getElementById("txtResult7").innerHTML ="tổng hai kí số = " + Sum;
}
document.getElementById("btnSum").onclick = calSum;