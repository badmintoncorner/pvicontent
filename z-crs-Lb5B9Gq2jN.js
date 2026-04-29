// COURSE INFO - fictitious for testing purposes capstone project

/*

INDIVIDUAL - default/gray/black
GROUPINGS - green

 YELLOW:
 - Activity
 - Assignment
 - Paper
 ORANGE: Quiz
 EXAM: Red
 VIDE & PRESENTATION: Brown
 MEETING: Black/Gray
 PROJECT/PT: Purple
*/

// PHILOSOPHY ========================

function philosophy() {
  setCourse({
    crsheader: "🧠 Introduction to the Philosophy of the Human Person",
    crstitle: "Title",
    crsdetails: "Details",
    professor: "Bro. Stephen Anthony Croos, IVE",
    crsschedule: "Fri - 10:20am - 11:20am",
    tasks: [
      {
        name: "FINAL EXAM REVIEWER",
        date: "12/23/25",
        link: `
        <div class="chp c-gray"> <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="c-icn"> <use href="#linc"></use> </svg> <a target="_blank" href="https://biccbolpenn.netlify.app/7dNyMDBU30qYVqD/FINAL-EXAM-philosophy.pdf" class="c-txt2">Link</a></div>
        `
      },
    ],
    works: [
      {
        status: createChip2("● Submit...", "c-green"),
        actname: "Final Project in Philosophy - Saint Carlo Acutis",
	format: createChip("Individual", "c-gray"),
	type: createChip("Project", "c-purple"),
        score: "90/100",
        due: "February 27, 2026"
      }
    ]
   });
}

// XP

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("bdg").innerHTML = `
  <table style="border-collapse: collapse;">
    <tbody>
        <tr><th class="mdl nbrd w30"><h6 class="k6 j2"><svg width="15" height="15" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icn" viewBox="0 0 24 24">
  <use href="#menu-icon"></use>
</svg> Expense</h6></th><th class="mdl nbrd w30"><h6 class="k6 j2"><svg width="15" height="15" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icn" viewBox="0 0 24 24">
  <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
</svg> Description</h6></th><th class="mdl nbrd w20"><h6 class="k6 j2">Date</h6></th><th class="mdl nbrd w20"><h6 class="k6 j2">Amount</h6></th></tr>
<tr>
<th class="mdl m-l w30"><p class="k9 j12">Transportation<br>Mr. Donut<br>Woonmart<br>National Bookstore</p></th>
<th class="mdl w30"></th>
<th class="mdl w20"><p class="k9 j12">April 29, 2026</p></th>
<th class="mdl w20 m-r"><p class="k9 j12">₱ 33.00<br>₱ 60.00<br>₱ 95.00<br>₱ 39.00<hr><b>₱ 227.00</b></p></th>
</tr>
</tbody>
</table>
`;

});
