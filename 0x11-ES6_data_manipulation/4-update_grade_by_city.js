export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  if (!Array.isArray(listStudents) || !Array.isArray(newGrades)) {
    return [];
  }

  return listStudents.filter((students) => students.location === city)
    .map((student) => {
      const grades = newGrades.filter((students) => students.studentId === student.id);
      Object.assign(student, { grade: grades.length ? grades[0].grade : 'N/A' });
      return student;
    });
}
