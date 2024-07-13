/**
 * Grade Calculate
 * @param {*} mark
 * @returns
 */
let gradeCal = (mark) => {
  let grade;

  //condition check
  if (mark >= 0 && mark < 33) {
    grade = "F";
  } else if (mark >= 33 && mark < 40) {
    grade = "D";
  } else if (mark >= 40 && mark < 50) {
    grade = "C";
  } else if (mark >= 50 && mark < 60) {
    grade = "B";
  } else if (mark >= 60 && mark < 70) {
    grade = "A-";
  } else if (mark >= 70 && mark < 80) {
    grade = "A";
  } else if (mark >= 80 && mark <= 100) {
    grade = "A+";
  } else {
    grade = "INVALID Number!";
  }

  return grade;
};

/**
 * GPA Calculator
 * @param {*} mark
 * @returns
 */
let gpaCal = (mark) => {
  let gpa;

  //condition check
  if (mark >= 0 && mark < 33) {
    gpa = 0;
  } else if (mark >= 33 && mark < 40) {
    gpa = 1;
  } else if (mark >= 40 && mark < 50) {
    gpa = 2;
  } else if (mark >= 50 && mark < 60) {
    gpa = 3;
  } else if (mark >= 60 && mark < 70) {
    gpa = 3.5;
  } else if (mark >= 70 && mark < 80) {
    gpa = 4;
  } else if (mark >= 80 && mark <= 100) {
    gpa = 5;
  } else {
    gpa = "INVALID GPA!";
  }

  return gpa;
};

/**
 *  Is Passed of Fail
 * @param {*} s1
 * @param {*} s2
 * @param {*} s3
 * @param {*} s4
 * @param {*} s5
 * @param {*} s6
 * @returns
 */
let isPassed = (s1, s2, s3, s4, s5, s6) => {
  if (s1 >= 33 && s2 >= 33 && s3 >= 33 && s4 >= 33 && s5 >= 33 && s6 >= 33) {
    return true;
  } else {
    return false;
  }
};

/**
 * Final GPA
 * @param {*} s1
 * @param {*} s2
 * @param {*} s3
 * @param {*} s4
 * @param {*} s5
 * @param {*} s6
 * @returns
 */
let finalGPA = (s1, s2, s3, s4, s5, s6) => {
  if (isPassed(s1, s2, s3, s4, s5, s6)) {
    // summation all gpa
    let $totalGPA =
      gpaCal(s1) +
      gpaCal(s2) +
      gpaCal(s3) +
      gpaCal(s4) +
      gpaCal(s5) +
      gpaCal(s6);

    // Avarage GPA
    return ($totalGPA / 6).toFixed(2);
  } else {
    return 0;
  }
};
/*
let finalGrade = (s1, s2, s3, s4, s5, s6) => {
  if (isPassed(s1, s2, s3, s4, s5, s6)) {
    // summation all gpa
    let $totalGPA =
      gpaCal(s1) +
      gpaCal(s2) +
      gpaCal(s3) +
      gpaCal(s4) +
      gpaCal(s5) +
      gpaCal(s6);

    // Avarage GPA
    let avgGPA = $totalGPA / 6;

    if (avgGPA >= 0 && avgGPA < 1) {
      avgGrade = "F";
    } else if (avgGPA >= 1 && avgGPA < 2) {
      avgGrade = "D";
    } else if (avgGPA >= 2 && avgGPA < 3) {
      avgGrade = "C";
    } else if (avgGPA >= 3 && avgGPA < 3.5) {
      avgGrade = "B";
    } else if (avgGPA >= 3.5 && avgGPA < 4) {
      avgGrade = "A-";
    } else if (avgGPA >= 4 && avgGPA < 5) {
      avgGrade = "A";
    } else if (avgGPA == 5) {
      avgGrade = "A+";
    } else {
      avgGrade = "INVALID GRADE!";
    }

    return avgGrade;
  } else {
    return "F";
  }
};*/

let finalGrade = (s1, s2, s3, s4, s5, s6) => {
  let avgGrade;
  let finalgpa = finalGPA(s1, s2, s3, s4, s5, s6);

  // conditional check
  if (finalgpa >= 0 && finalgpa < 1) {
    avgGrade = "F";
  } else if (finalgpa >= 1 && finalgpa < 2) {
    avgGrade = "D";
  } else if (finalgpa >= 2 && finalgpa < 3) {
    avgGrade = "C";
  } else if (finalgpa >= 3 && finalgpa < 3.5) {
    avgGrade = "B";
  } else if (finalgpa >= 3.5 && finalgpa < 4) {
    avgGrade = "A-";
  } else if (finalgpa >= 4 && finalgpa < 5) {
    avgGrade = "A";
  } else if (finalgpa == 5) {
    avgGrade = "A+";
  } else {
    avgGrade = "INVALID GRADE!";
  }

  return avgGrade;
};
