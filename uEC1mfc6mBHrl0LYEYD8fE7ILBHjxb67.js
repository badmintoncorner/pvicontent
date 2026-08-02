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

function june() {
document.getElementById("magnoA").innerHTML = "1";
  document.getElementById("malonesA").innerHTML = "1";
  document.getElementById("magnoT").innerHTML = "1";
   document.getElementById("lanoA").innerHTML = "1";
   document.getElementById("acarT").innerHTML = "1";
   document.getElementById("vergaraLT").innerHTML = "4";
   document.getElementById("banaagA").innerHTML = "1";
   document.getElementById("decastroGVT").innerHTML = "1";
   document.getElementById("decastroFLT").innerHTML = "1";
}

function july() {
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
