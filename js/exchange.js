/**
 * khối 1: input
 * tỉ giá giữ VND và USD = 235000
 * Số USD
 * khối 2:
 * tạo hàm
 * lấy giá trị từ form
 * lập công thức: 1 USD = 1VND * 235000
 * khối 3: output
 * số tiền sau chuyển đổi
 */

function calVNd() {
    var USD = document.getElementById("inputUSD").value;
    var VND = USD * 23500;
    document.getElementById("txtResult3").innerHTML = VND.toLocaleString();
}
document.getElementById("btnCalc").onclick = calVNd;