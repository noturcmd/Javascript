
// var angka = prompt("Masukkan angka : ");
// document.writeln("Angka yang Anda masukkan : " + angka);
// document.writeln("<br>" + "Tipe data dari inputan prompt : "+ typeof(angka));


// var jumlahkanDenganLima = function(){
//     return Number(angka) + 5;
// }

// document.writeln("<br>Hasil penjumlahan dengan lima : " + jumlahkanDenganLima());


var ubahLayout = document.getElementsByTagName("li");
console.log(ubahLayout);

for(var i = 0; i < ubahLayout.length; i++){
    ubahLayout[i].style.backgroundColor = "red";
}