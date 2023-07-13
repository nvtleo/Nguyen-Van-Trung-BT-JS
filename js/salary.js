/**
 * khối 1: input
 * số ngày làm
 * khối 2 : 
 * tạo hàm
 * lấy giá trị từ biến 
 * lập công thức : tiền lương = số ngày làm * 100000
 * khối 3: output
 * tiền lương
 */



function calSa() {
    var soNgayLam = document.getElementById("inputDay").value;
    var tienLuong = soNgayLam * 100000;
    document.getElementById("txtResult1").innerHTML =  tienLuong.toLocaleString()

}
document.getElementById("btnCalc").onclick = calSa;