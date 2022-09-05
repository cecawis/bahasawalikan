document.getElementById("kata").onkeyup = function() {terjemahanKata()};
		
function terjemahanKata() {
    let $kata = document.getElementById("kata").value;
    let $hasil = document.getElementById("hasil");

    let $aksara1 = ['h', 'n', 'c', 'r', 'k'];
    let $aksara2 = ['d', 't', 's', 'w', 'l'];
    let $aksara3 = ['p', 'dh', 'j', 'y', 'ny'];
    let $aksara4 = ['m', 'g', 'b', 'th', 'ng'];

    let $hasilKebalikan = "";
    let $indeksAksara1 = "";
    let $indeksAksara2 = "";
    let $indeksAksara3 = "";
    let $indeksAksara4 = "";
    let $potongan2huruf = "";
    let $indeksAksara3_2huruf = "";
    let $indeksAksara4_2huruf = "";

    $kata = $kata.toLowerCase();

    let $pecahKata = $kata.split("");
    for($i = 0; $i < $pecahKata.length; $i++)
    {
        $indeksAksara1 = $aksara1.indexOf($pecahKata[$i].toLowerCase());
        $indeksAksara2 = $aksara2.indexOf($pecahKata[$i].toLowerCase());
        $indeksAksara3 = $aksara3.indexOf($pecahKata[$i].toLowerCase());
        $indeksAksara4 = $aksara4.indexOf($pecahKata[$i].toLowerCase());

        $potongan2huruf = $kata.slice($i, $i + 2);
        $indeksAksara3_2huruf = $aksara3.indexOf($potongan2huruf);
        $indeksAksara4_2huruf = $aksara4.indexOf($potongan2huruf);

        if ($indeksAksara3_2huruf >= 0){
            $hasilKebalikan = $hasilKebalikan + $aksara1[$indeksAksara3_2huruf];
            $i = $i + 1;
        } else if ($indeksAksara4_2huruf >= 0){
            $hasilKebalikan = $hasilKebalikan + $aksara2[$indeksAksara4_2huruf];
            $i = $i + 1;
        } else if ($indeksAksara1 >= 0){
            $hasilKebalikan = $hasilKebalikan + $aksara3[$indeksAksara1];
        } else if ($indeksAksara2 >= 0){
            $hasilKebalikan = $hasilKebalikan + $aksara4[$indeksAksara2];
        } else if ($indeksAksara3 >= 0){
            $hasilKebalikan = $hasilKebalikan + $aksara1[$indeksAksara3];
        } else if ($indeksAksara4 >= 0){
            $hasilKebalikan = $hasilKebalikan + $aksara2[$indeksAksara4];
        } else {
            $hasilKebalikan = $hasilKebalikan + $pecahKata[$i];
        }
    }
    $hasil.value = $hasilKebalikan;
}

document.getElementById("salin").onclick = function() {salinTeks()};

function salinTeks() {
  let salinKata = document.getElementById("hasil");
  let salinKataKosong = document.getElementById("hasil").value;
  if (salinKataKosong == "" || salinKataKosong == null) {
    document.getElementById("hasilSalin").innerHTML=(`<span class="salinKataNo">Anda belum menulis apapun</span>`);
  } else {
  salinKata.select();
  salinKata.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(salinKata.value);
  document.getElementById("hasilSalin").innerHTML=(`<span class="salinKata">Teks disalin ke papan klip</span>`);
  }
}

let hapusKata = document.getElementById("kata");
let hapusHasilKata = document.getElementById("hasil");
let btn = document.getElementById("hapus");
btn.addEventListener('click',()=>{
hapusKata.value = "";
hapusHasilKata.value = "";
})