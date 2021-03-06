import { useState } from 'react';

const AddStudentHook = () => {
  const [students, setStudents] = useState(['Huyen', 'Hoa', 'Hung', 'Long']);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return {
    students,
    addStudent,
  };
};

export { AddStudentHook };
