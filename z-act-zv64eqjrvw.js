// ACTIVITY INFO - fictitious data for juan dl cruz for testing purposes capstone project

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

// CLEAR ====

function clearActivity() {
  setActivity({});
}

// APRIL 30 =====

function apr30idmaking() {
  setActivity({
    header: "🏫 I.D. Making @ LPCA",
    time: "8:00 a.m.",
    instruction: `
    <b>I.D. Making</b> w/ feliz - conference room 8:00 a.m.
`
  });
}

// MAY 1 =====

function may1lineup() {
  setActivity({
    header: "⛪ SRDCC - DPP Novena Mass",
    time: "4:00 p.m.",
    type: { text: "Service", class: "c-brown" },
    format: { text: "Individual", class: "c-yellow" },
    instruction: `
<h5 class="bd">🤍 MAY 1 LINEUP</h5> 🤍<b> Entrance</b>: MAGALAK TAYONG LAHAT <br><br> KYRIE - JUBILEE <br><br> SALMONG TUGUNAN<br>Poon kami’y pagpalain<br>at iyong pagtagumpayin. <br><br> ALLELUIA (Panganiban)<br>Manunubos naming mahal,<br>salamat sa ‘yong patnubay<br>at paglingap araw-araw. <br><br> 🤍<b>OFFERTORY</b><br> - Tanggapin Mo, O Panginoon <br><br> 🤍 SANTO/AKLAMASYON/AMEN/AMA NAMIN/SAPAGKAT/KORDERO - Jubilee <br><br> 🤍<b>COMMUNION</b><br> - Mapag-iisang Bayan <br> - Ito ang Araw <br><br> 🤍<b>RECESSIONAL</b><br> - Ito ang Bagong Araw
`
  });
}
