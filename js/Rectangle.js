/**
 * khối 1 : input
 * chiều dài hình chữ nhật
 * chiều rộng hình chữ nhật
 * khối 2:
 * tạo hàm
 * lấy giá trị từ form
 * lập công thức tính toán: 
 * chu vi = (chiều dài + chiều rộng) * 2
 * diệnt tích = chiều dài nhân chiều rộng
 * khối 3 : output
 * chu vi hình chữ nhật
 * diện tích hình chữ nhật
 */


function calSC() {
    var chieuDai = document.getElementById("inputheight").value;
    var chieuRong = document.getElementById("inputwidth").value;
    var dienTich = chieuDai * chieuRong;
    var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
    document.getElementById("txtResult5").innerHTML = "diện tích = " + dienTich +  "; chu vi = " + chuVi;
   

}
document.getElementById("btnSC").onclick = calSC;