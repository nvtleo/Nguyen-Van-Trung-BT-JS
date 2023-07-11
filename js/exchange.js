function calVNd() {
    var USD = document.getElementById("inputUSD").value;
    var VND = USD * 23500;
    document.getElementById("txtResult3").innerHTML = VND.toLocaleString();
}
document.getElementById("btnCalc").onclick = calVNd;