import React, { useState } from 'react';
import { AddStudentHook } from './AddStudentHook';

function StudentList() {
  const { students, addStudent } = AddStudentHook();

  const [newStudent, setNewStudent] = useState('');

  return (
    <div>
      <div style={{ margin: 20 }}>学生一覧：[Huyen, Hoa, Hung, Long]</div>
      <div>
        <div style={{ margin: 20 }}>
          追加する名前を入力してください。
          <form
            style={{ margin: 20 }}
            onSubmit={(e) => {
              e.preventDefault();
              addStudent(newStudent);
            }}
          >
            <label>
              <input
                type='text'
                value={newStudent}
                onChange={(e) => setNewStudent(e.target.value)}
              />
            </label>
            <div style={{ margin: 20, marginLeft: 200 }}>
              <input type='submit' value='確定' />
            </div>
          </form>
        </div>
        <div style={{ margin: 20 }}>追加する名前：{newStudent}</div>
        <div style={{ margin: 20 }}>
          新しい一覧：[
          {students.map((item) => item + ',')}]
        </div>
      </div>
    </div>
  );
}

export default StudentList;
