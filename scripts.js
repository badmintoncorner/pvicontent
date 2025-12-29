function sdbr_open() {
  document.getElementById("sdbr").style.display = "block";
}
function sdbr_close() {
  document.getElementById("sdbr").style.display = "none";
}
function activate(el) {
  [...el.parentElement.children].forEach(sib => {
    sib.style.color = 'var(--accentcolor)';
  });
  el.style.color = '#393939';
}
function date() {
  document.querySelectorAll(".dt-slct")
    .forEach(el => el.classList.remove("dt-slct"));

  const today = new Date().getDate();
  document.querySelectorAll(`.date-${today}`)
    .forEach(el => el.classList.add("dt-slct"));
}
    function openPVI(pviName) {
  var i;
  var x = document.getElementsByClassName("pvisite");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(pviName).style.display = "block";
}
function openDB(dbName) {
  var i;
  var x = document.getElementsByClassName("dbcontent");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(dbName).style.display = "block";
}
function minimize() {
  document.getElementById('abshrt').style.display='none',document.getElementById('ablngt').style.display='block',Array.from(document.getElementsByClassName('lbl')).forEach(e => e.style.display='none'),document.getElementById('sdbr').style.width = '55px',document.getElementById('main').style.marginLeft = '55px',document.getElementById('courses').style.marginLeft = '55px',Array.from(document.getElementsByClassName('navicons')).forEach(e => e.style.fontSize = '24px')
}
function maximize() {
  document.getElementById('abshrt').style.display='block',document.getElementById('ablngt').style.display='none',Array.from(document.getElementsByClassName('lbl')).forEach(e => e.style.display='block'),document.getElementById('sdbr').style.width = '85px',document.getElementById('main').style.marginLeft = '85px',document.getElementById('courses').style.marginLeft = '85px',Array.from(document.getElementsByClassName('navicons')).forEach(e => e.style.fontSize = '26px')
}
function closeAll() {
  Array.from(document.getElementsByClassName("incominglist")).forEach(e => e.style.display='none');Array.from(document.getElementsByClassName('dashboardcourses')).forEach(e => e.style.display='none');Array.from(document.getElementsByClassName('coursestab')).forEach(e => e.style.display='none');Array.from(document.getElementsByClassName('feedback')).forEach(e => e.style.display='none');Array.from(document.getElementsByClassName('inbox')).forEach(e => e.style.display='none');Array.from(document.getElementsByClassName('calendar')).forEach(e => e.style.display='none')
}
function accordion(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
function nv() {
  document.getElementById('nbdash').classList.remove('nbselected'),document.getElementById('nbcourse').classList.remove('nbselected'),document.getElementById('nbinbox').classList.remove('nbselected'),document.getElementById('nbcalendar').classList.remove('nbselected')
}
function line1(el) { move(el, '8px'); }
function line2(el) { move(el, '43px'); }
function line3(el) { move(el, '77px'); }
function line4(el) { move(el, '110px'); }
function line5(el) { move(el, '145px'); }
function line6(el) { move(el, '179px'); }

function move(el, value) {
  Array.from(el.parentElement.children).forEach(sibling => {
    if (sibling.tagName === 'DIV') {
      sibling.style.marginTop = value;
    }
  });
}

function crt(btn) {
  btn.style.setProperty("color", "#339d33", "important");

  const siblings = btn.parentElement.querySelectorAll("button");
  siblings.forEach(b => {
    if (b !== btn) b.disabled = true;
  });
}

function incrt(btn) {
  btn.style.setProperty("color", "#e5326f", "important");

  const siblings = btn.parentElement.querySelectorAll("button");
  siblings.forEach(b => {
    if (b !== btn) b.disabled = true;
  });
}
