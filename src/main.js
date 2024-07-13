// student info
let st_name = prompt("Student Name:");
let st_roll = prompt("Student Roll:");
let st_reg = prompt("Student Registration:");

// subject name
let bangla = prompt("Bangla Mark:");
let english = prompt("English Mark:");
let math = prompt("Math Mark:");
let science = prompt("Science Mark:");
let sscience = prompt("Soc Science Mark:");
let relegion = prompt("Religion Mark:");

console.log(`
    Student Name:   ${st_name}
    Student Roll:   ${st_roll}
    Student Regi:   ${st_reg}
----------------------------------------------------------------------

    Subject Name    =        Mark           =   Grade                   =   GPA
    Bangla          =       ${bangla}       =   ${gradeCal(
  bangla
)}     = ${gpaCal(bangla)}
    English         =       ${english}      =   ${gradeCal(
  english
)}    = ${gpaCal(english)}
    Math            =       ${math}         =   ${gradeCal(math)}    = ${gpaCal(
  math
)}
    Science         =       ${science}      =   ${gradeCal(
  science
)}    = ${gpaCal(science)}
    Social Sci      =       ${sscience}     =   ${gradeCal(
  sscience
)}    = ${gpaCal(sscience)}
    Religion        =       ${relegion}     =   ${gradeCal(
  relegion
)}    = ${gpaCal(relegion)}

===================================================================================
Final Result: ${
  isPassed(bangla, english, math, science, sscience, relegion)
    ? "Passed"
    : "Fail"
}
Final Grade: ${finalGrade(bangla, english, math, science, sscience, relegion)}
Final GPA: ${finalGPA(bangla, english, math, science, sscience, relegion)}
`);
