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

// CALENDAR

document.addEventListener("DOMContentLoaded", () => {

  function setEvent(dateClass, html) {
    document.querySelectorAll('.' + dateClass).forEach(el => {
      const h6 = el.closest('h6');
      const target = h6 ? h6.nextElementSibling : null;

      if (target && target.classList.contains('fl')) {
        target.innerHTML = html;
      }
    });
  }

/*

INDIVIDUAL - default/gray/black
GROUPINGS - green

 YELLOW:
 - Activity
 - Assignment
 - Paper
 ORANGE: Quiz
 EXAM: Red
 VIDEO & PRESENTATION: Brown
 MEETING: Black/Gray
 PROJECT/PT: Purple
*/

// MAY 2 -----------------
  setEvent('dt-2', `
    <div class="event">
      <p>🎹 SRDCC - Anticipated Mass<br>
      <span class="time">3:30 p.m.</span></p>
      <div class="chp c-brown"><a class="c-txt2">Service</a></div><br>
    </div>
  `);

// MAY 9 -----------------
  setEvent('dt-9', `
    <div class="event">
      <p>🎹 SRDCC - Anticipated Mass<br>
      <span class="time">3:30 p.m.</span></p>
      <div class="chp c-brown"><a class="c-txt2">Service</a></div><br>
    </div>
  `);
      
// MAY 16 -----------------
  setEvent('dt-16', `
    <div class="event">
      <p>🎹 SRDCC - Anticipated Mass<br>
      <span class="time">3:30 p.m.</span></p>
      <div class="chp c-brown"><a class="c-txt2">Service</a></div><br>
    </div>
  `);
      
      // APR 30 -----------------
  setEvent('dt-30', `
    <div class="event">
      <p>🎬 Miraculous Ladybug - The Chained Titans<br><span class="time">7:00 a.m.</span></p><div class="chp c-purple">
        <a class="c-txt2">Premiere</a>
      </div><br>
    </div> <div class="event ev-mb" onclick="document.getElementById('activitymodal').style.display='block'; apr30idmaking();">
      <p>🏫 I.D. Making @ LPCA<br>
      <span class="time">8:00 a.m.</span></p>
      <div class="chp chp-r c-red"><a class="c-txt2">● Not started</a></div><br>
    </div>
  `);

// MAY 1 -----------------
  setEvent('dt-1', `
    <div class="event" onclick="document.getElementById('activitymodal').style.display='block'; may1lineup();">
      <p>⛪ SRDCC - DPP Novena Mass<br>
      <span class="time">4:00 p.m.</span></p>
      <div class="chp c-brown"><a class="c-txt2">Service</a></div><br>
    </div>
  `);

// APR 29 -----------------
  setEvent('dt-29', `
    <div class="event">
      <p>📝 Registration - BSKE (Robinsons)<br>
      <span class="time">9:00 a.m.</span></p>
      <div class="chp chp-r c-green"><a class="c-txt2">● Done</a></div><br>
    </div>
  `);

});
