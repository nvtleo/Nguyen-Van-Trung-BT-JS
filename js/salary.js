function calSa() {
    var soNgayLam = document.getElementById("inputDay").value;
    var tienLuong = soNgayLam * 100000;
    document.getElementById("txtResult1").innerHTML =  tienLuong.toLocaleString()

}
document.getElementById("btnCalc").onclick = calSa;