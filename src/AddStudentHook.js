import { useState } from 'react';

const AddStudentHook = () => {
  const [students, setStudents] = useState(['Huyen', 'Hoa', 'Hung', 'Long']);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
    console.log(students);
  };

  return {
    students,
    addStudent,
  };
};

export { AddStudentHook };
