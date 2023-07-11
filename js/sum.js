function calSum() {
    var number = document.getElementById("inputNum").value;
    var soHangDonVi = number % 10 ;
    var soHangChuc = Math.floor(number / 10) ; 
    var Sum = soHangChuc + soHangDonVi;
document.getElementById("txtResult7").innerHTML ="tổng hai kí số = " + Sum;
}
document.getElementById("btnSum").onclick = calSum;