function hitungL() {
  var alas = document.getElementById('alas').value;
  var tinggi = document.getElementById('tinggi').value;
  var luasInput = document.getElementById('luas');
    var luas = 1/2 * alas * tinggi;
    luasInput.value = luas;

}
function hitungK (){
  var s1=parseInt(document.getElementById('s1').value);
  var s2=parseInt(document.getElementById('s2').value);
  var s3=parseInt(document.getElementById('s3').value);
  var keliling = s1 + s2 + s3;
  var kelilingInput=document.getElementById('keliling');
  kelilingInput.value =keliling;

}


function resetdata (){
  var form = document.getElementById('resetdata');
  form.reset()
}






  