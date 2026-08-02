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
