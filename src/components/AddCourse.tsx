import { useState } from "react";

type Props = {
  setCourses: React.Dispatch<React.SetStateAction<any[]>>;
};


function AddCourse({setCourses}: Props) {

  const [code, setCode] = useState("");
  const [day, setDay] = useState("Mon");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [section, setSection] = useState("A01");


  function addCourse(){

    const newCourse = {
      code,
      sections:[
        {
          id: section,
          day,
          start,
          end
        }
      ]
    };


    setCourses(prev => [
      ...prev,
      newCourse
    ]);


    setCode("");
    setStart("");
    setEnd("");
  }


  return (
    <div>

      <h2>Add Course</h2>


      <input
        placeholder="Course Code (CSI2110)"
        value={code}
        onChange={(e)=>setCode(e.target.value)}
      />


      <input
        placeholder="Section"
        value={section}
        onChange={(e)=>setSection(e.target.value)}
      />


      <input
        placeholder="Start (08:30)"
        value={start}
        onChange={(e)=>setStart(e.target.value)}
      />


      <input
        placeholder="End (09:50)"
        value={end}
        onChange={(e)=>setEnd(e.target.value)}
      />


      <select
        value={day}
        onChange={(e)=>setDay(e.target.value)}
      >

        <option>Mon</option>
        <option>Tue</option>
        <option>Wed</option>
        <option>Thu</option>
        <option>Fri</option>
        <option>Sat</option>
        <option>Sun</option>

      </select>


      <button onClick={addCourse}>
        Add
      </button>


    </div>
  );
}


export default AddCourse;