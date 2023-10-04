export default function updateStudentGradeByCity(args, city, newGrades) {
  return args
    .filter((arg) => arg.location === city)
    .map((person) => {
      const grades = newGrades.filter((arg) => arg.studentId === person.id);
      const grade = grades.length ? grades[0].grade : "N/A";
      return {
        ...person,
        grade,
      };
    });
}
