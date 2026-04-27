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

