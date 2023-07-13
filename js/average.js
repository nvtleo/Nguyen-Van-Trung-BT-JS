/*
khối 1:input
 cho người dùng nhập vào năm số
khối 2: 
tạo hàm
lấy giá trị từ form
lập công thức tính toán: tổng 5 số chia 5 = trung bình cộng 5 số
khối 3 : output
trung bình cong 5 số
*/

function calAv() {
    var soThuNhat = document.getElementById("inputNum").value;
    var soThuHai = document.getElementById("inputNum").value;
    var soThuBa = document.getElementById("inputNum").value;
    var soThuTu = document.getElementById("inputNum").value;
    var soThuNam = document.getElementById("inputNum").value;
var trungbinh = (Number(soThuNhat)+Number(soThuHai)+Number(soThuBa)+Number(soThuTu)+Number(soThuNam)) / 5 ;
document.getElementById("txtResult").innerHTML =  trungbinh
}
document.getElementById("btnAv").onclick = calAv;