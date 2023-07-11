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