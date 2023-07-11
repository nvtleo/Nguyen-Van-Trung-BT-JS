function calSC() {
    var chieuDai = document.getElementById("inputheight").value;
    var chieuRong = document.getElementById("inputwidth").value;
    var dienTich = chieuDai * chieuRong;
    var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
    document.getElementById("txtResult5").innerHTML = "diện tích = " + dienTich +  "; chu vi = " + chuVi;
   

}
document.getElementById("btnSC").onclick = calSC;