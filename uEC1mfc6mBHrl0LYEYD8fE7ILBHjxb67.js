function openPVI(pviName) {
  var i;
  var x = document.getElementsByClassName("pvisite");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(pviName).style.display = "block";
}

    function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
    
const search = document.getElementById("search");
const rows = document.querySelectorAll("#attendanceTable tr");

search.addEventListener("input", function () {
    const term = this.value.toLowerCase();

    rows.forEach(row => {
        // Skip header row
        if (row.querySelector("th")) return;

        const found = [...row.querySelectorAll("td")].some(td =>
            td.textContent.toLowerCase().includes(term)
        );

        row.style.display = found ? "" : "none";
    });
});

// SAMPLE

function acClearAll() {
document.getElementById("atn-june").className = "btn2 f12 m-r";
  document.getElementById("atn-july").className = "btn2 f12 m-r";
  document.getElementById("atn-august").className = "btn2 f12 m-r";
}

function acjune() {
acClearAll();
  document.getElementById("atn-june").className = "btn f12 m-r";
}

function acjuly() {
acClearAll();
  document.getElementById("atn-july").className = "btn f12 m-r";
}

function acaugust() {
acClearAll();
  document.getElementById("atn-august").className = "btn f12 m-r";
}

function clearAttendance() {
    const ids = [
        "acarEA","acarET","acarA","acarT","acarMP",
        "atienzaEA","atienzaET","atienzaA","atienzaT","atienzaMP",
        "bacallaEA","bacallaET","bacallaA","bacallaT","bacallaMP",
        "banaagEA","banaagET","banaagA","banaagT","banaagMP",
        "barzaEA","barzaET","barzaA","barzaT","barzaMP",
        "boncalosEA","boncalosET","boncalosA","boncalosT","boncalosMP",
        "catapangJMEA","catapangJMET","catapangJMA","catapangJMT","catapangJMMP",
        "decastroGVEA","decastroGVET","decastroGVA","decastroGVT","decastroGVMP",
        "decastroFLEA","decastroFLET","decastroFLA","decastroFLT","decastroFLMP",
        "deleonEA","deleonET","deleonA","deleonT","deleonMP",
        "fontillasEA","fontillasET","fontillasA","fontillasT","fontillasMP",
        "hidalgoEA","hidalgoET","hidalgoA","hidalgoT","hidalgoMP",
        "jugnoEA","jugnoET","jugnoA","jugnoT","jugnoMP",
        "lanoEA","lanoET","lanoA","lanoT","lanoMP",
        "leyesaEA","leyesaET","leyesaA","leyesaT","leyesaMP",
        "lorenteEA","lorenteET","lorenteA","lorenteT","lorenteMP",
        "lubisEA","lubisET","lubisA","lubisT","lubisMP",
        "magnoEA","magnoET","magnoA","magnoT","magnoMP",
        "magsumbolEA","magsumbolET","magsumbolA","magsumbolT","magsumbolMP",
        "recintoEA","recintoET","recintoA","recintoT","recintoMP",
        "vergaraLEA","vergaraLET","vergaraLA","vergaraLT","vergaraLMP",
        "andalEA","andalET","andalA","andalT","andalMP",
        "bermilloEA","bermilloET","bermilloA","bermilloT","bermilloMP",
        "capinigEA","capinigET","capinigA","capinigT","capinigMP",
        "catapangHZEA","catapangHZET","catapangHZA","catapangHZT","catapangHZMP",
        "delavegaEA","delavegaET","delavegaA","delavegaT","delavegaMP",
        "llaveEA","llaveET","llaveA","llaveT","llaveMP",
        "malonesEA","malonesET","malonesA","malonesT","malonesMP",
        "nazEA","nazET","nazA","nazT","nazMP",
        "pesaEA","pesaET","pesaA","pesaT","pesaMP",
        "ramosEA","ramosET","ramosA","ramosT","ramosMP",
        "roblesEA","roblesET","roblesA","roblesT","roblesMP",
        "tiquisEA","tiquisET","tiquisA","tiquisT","tiquisMP",
        "vergaraTMEA","vergaraTMET","vergaraTMA","vergaraTMT","vergaraTMMP"
    ];

    ids.forEach(id => {
        document.getElementById(id).innerHTML = "0";
    });
}

function june() {
  clearAttendance();acjune();
document.getElementById("magnoA").innerHTML = "1";
  document.getElementById("malonesA").innerHTML = "1";
  document.getElementById("magnoT").innerHTML = "1";
   document.getElementById("lanoA").innerHTML = "2";
  document.getElementById("lanoEA").innerHTML = "5";
   document.getElementById("acarT").innerHTML = "1";
   document.getElementById("vergaraLT").innerHTML = "4";
  document.getElementById("vergaraTMET").innerHTML = "1";
  document.getElementById("vergaraLET").innerHTML = "1";
   document.getElementById("banaagA").innerHTML = "1";
   document.getElementById("decastroGVT").innerHTML = "1";
   document.getElementById("decastroFLT").innerHTML = "1";
  document.getElementById("andalA").innerHTML = "1";
}

function july() {
  clearAttendance();acjuly();
  document.getElementById("leyesaA").innerHTML = "2";
   document.getElementById("leyesaT").innerHTML = "1";
   document.getElementById("hidalgoT").innerHTML = "1";
  document.getElementById("magnoA").innerHTML = "1";
  document.getElementById("magnoT").innerHTML = "1";
  document.getElementById("recintoA").innerHTML = "2";
  document.getElementById("banaagA").innerHTML = "1";
  document.getElementById("delavegaA").innerHTML = "1";
  document.getElementById("fontillasA").innerHTML = "1";
  document.getElementById("acarT").innerHTML = "1";
  document.getElementById("boncalosA").innerHTML = "1";
  document.getElementById("jugnoT").innerHTML = "1";
}

function august() {
clearAttendance();acaugust();
document.getElementById("deleonA").innerHTML = "1";
document.getElementById("catapangJMEA").innerHTML = "1";
document.getElementById("boncalosA").innerHTML = "1";
document.getElementById("lorenteA").innerHTML = "1";
document.getElementById("magnoEA").innerHTML = "1";
document.getElementById("fontillasA").innerHTML = "1";
document.getElementById("banaagA").innerHTML = "1";
document.getElementById("lanoEA").innerHTML = "2";
document.getElementById("delavegaA").innerHTML = "1";
document.getElementById("tiquisEA").innerHTML = "1";

}
