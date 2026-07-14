type Props = {
  courses: any[];
  selected: any[];
  setSelected: React.Dispatch<React.SetStateAction<any[]>>;
};

function CourseSelector({ courses, selected, setSelected }: Props) {

  function selectSection(section: any, courseCode: string) {

    const newSection = {
      ...section,
      course: courseCode
    };

    setSelected([
      ...selected,
      newSection
    ]);
  }


  return (
    <div>

      <h2>Select Courses</h2>

      {courses.map((course) => (

        <div key={course.code}>

          <h3>{course.code}</h3>


          {course.sections.map((section) => (

            <button
              key={section.id}
              onClick={() =>
                selectSection(section, course.code)
              }
            >

              {section.id} -
              {section.day}
              {" "}
              {section.start}-{section.end}

            </button>

          ))}

        </div>

      ))}

    </div>
  );
}

export default CourseSelector;