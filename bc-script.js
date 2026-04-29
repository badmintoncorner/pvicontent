function openPVI(pviName) {
  var i;
  var x = document.getElementsByClassName("pvisite");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(pviName).style.display = "block";  
}

function dropdown(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function openCourse(crsName) {
  var i;
  var x = document.getElementsByClassName("crs");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(crsName).style.display = "block";  
}

document.addEventListener("DOMContentLoaded", function () {
  const today = new Date().getDate();

  document.querySelectorAll(".date").forEach(el => {
        el.classList.remove("slct-dt");

    const dtClass = [...el.classList].find(c => c.startsWith("dt-"));

    if (dtClass) {
      const day = parseInt(dtClass.split("-")[1]);

      if (day === today) {
        el.classList.add("slct-dt");
      }
    }
  });
});

// TODAYS

function refresh() { 
  const today = new Date().getDate();
  const targetClass = "dt-" + today;

  const container = document.getElementById("todayevent");
  if (!container) return;

  container.innerHTML = "";

  const dateEl = document.querySelector("." + targetClass);
  if (!dateEl) return;

  const td = dateEl.closest("td");
  if (!td) return;

  const eventDivs = td.querySelectorAll(".event");
  if (!eventDivs.length) return;

  eventDivs.forEach(eventDiv => {
    const clone = eventDiv.cloneNode(true);
    container.appendChild(clone);
  });
}

// HELPER -------------

function createChip(text, colorClass, extraClass = "") {
  return `
    <div class="chp ${extraClass} ${colorClass} ubd">
      <span class="c-txt2">${text}</span>
    </div>
  `;
}

function createChip2(text, colorClass, extraClass = "") {
  return `
    <div class="chp chp-r ${extraClass} ${colorClass} ubd">
      <span class="c-txt2">${text}</span>
    </div>
  `;
}


// DATA ------------------

function setCourse({
  crsheader = "-",
  crstitle = "-",
  crsdetails = "-",
  professor = "-",
  crsschedule = "-",
  tasks = [],
  works = []
}) {

  document.getElementById("courseheader").innerHTML = crsheader;
  document.getElementById("coursetitle").innerHTML = crstitle;
  document.getElementById("coursedetails").innerHTML = crsdetails;
  document.getElementById("professor").innerHTML = professor;
  document.getElementById("courseschedule").innerHTML = crsschedule;

document.querySelectorAll(".trow").forEach(el => el.style.display = "none");
  document.querySelectorAll(".crow").forEach(el => el.style.display = "none");

  tasks.forEach((task, i) => {
    const rowNum = i + 1;

    const row = document.getElementById(`trow${rowNum}`);
    const name = document.getElementById(`tname${rowNum}`);
    const date = document.getElementById(`tdate${rowNum}`);
    const link = document.getElementById(`tlink${rowNum}`);

    if (row) row.style.display = "table-row";
    if (name) name.innerHTML = task.name;
    if (date) date.innerHTML = task.date;
    if (link) link.innerHTML = task.link;
  });

  works.forEach((work, i) => {
    const rowNum = i + 1;

    const row = document.getElementById(`crow${rowNum}`);
    const status = document.getElementById(`cstatus${rowNum}`);
    const name = document.getElementById(`cname${rowNum}`);
    const due = document.getElementById(`cdue${rowNum}`);
    const format = document.getElementById(`cformat${rowNum}`);
    const type = document.getElementById(`ctype${rowNum}`);
    const score = document.getElementById(`cscore${rowNum}`);

    if (row) row.style.display = "table-row";
    if (status) status.innerHTML = work.status;
    if (name) name.innerHTML = work.actname;
    if (due) due.innerHTML = work.due;
    if (format) format.innerHTML = work.format;
    if (type) type.innerHTML = work.type;
    if (score) score.innerHTML = work.score;
  });

 }

// ACTIVITY ==========

function setActivity({
  header = "-",
  subject = "-",
  due = "-",
  time = "-",
  type = { text: "-", class: "c-gray" },
  instruction = "-"
}) {
  document.getElementById("activityheader").innerHTML = header;
  document.getElementById("activitysubject").innerHTML = subject;
  document.getElementById("duedate").innerHTML = due;
  document.getElementById("activitytime").innerHTML = time;

  document.getElementById("activitytype").innerHTML = `
    <div class="chp ${type.class}">
      <a class="c-txt2">${type.text}</a>
    </div>
  `;

  document.getElementById("activityinstruction").innerHTML = instruction;
}

// CLEAR ----------------------------

function clearCourse() {
  document.getElementById("courseheader").innerHTML = "-";
  document.getElementById("coursetitle").innerHTML = "-";
  document.getElementById("coursedetails").innerHTML = "-";
  document.getElementById("professor").innerHTML = "-";
  document.getElementById("courseschedule").innerHTML = "-";

  const categories = ['tname', 'tdate', 'tlink', 'cname', 'cstatus', 'cdue', 'cformat', 'ctype', 'cscore'];
  categories.forEach(cat => {
    for (let i = 0; i <= 10; i++) {
      const el = document.getElementById(cat + i);
      if (el) el.innerHTML = '-';
    }
  });
}

// CLEAR ====

function clearActivity() {
  setActivity({});
}

// testing generic INFORMATION for juan dl cruz - capstone project purposes

// DATE
function daysAgo(id, month, day) {
const el = document.getElementById(id);
if (!el) return;
const d = new Date();
const t = new Date(d.getFullYear(), month - 1, day);
let diff = Math.floor((d - t) / (1000 * 60 * 60 * 24));
el.textContent =
diff === 0
      ? "Due today"
      : diff > 0
      ? `Overdue`
      : `Due in ${-diff} day${diff < -1 ? "s" : ""}`;
}
window.addEventListener("DOMContentLoaded", () => {
  daysAgo("apr24", 4, 24);
  daysAgo("apr23", 4, 23);
});
