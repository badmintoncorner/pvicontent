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
      }
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

// NXT COURSE ================
