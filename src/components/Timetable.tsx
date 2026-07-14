type Props = {
  selected: any[];
};

function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);

  return hours * 60 + minutes;
}

function generateTimes() {
  const times = [];

  let current = 8 * 60 + 30; // 8:30 AM
  const end = 21 * 60 + 50; // 9:50 PM

  while (current <= end) {

    const hours = Math.floor(current / 60);
    const minutes = current % 60;

    times.push(
      `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`
    );

    current += 90; // next class starts 1.5 hours later
  }

  return times;
}

function Timetable({ selected }: Props) {

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const times = generateTimes();


  return (
    <div>

      <h2>Weekly Timetable</h2>

      <table border={1}>

        <thead>
          <tr>
            <th>Time</th>

            {days.map(day => (
              <th key={day}>
                {day}
              </th>
            ))}

          </tr>
        </thead>


        <tbody>

          {times.map(time => (

            <tr key={time}>

              <td>
                {time}
              </td>


              {days.map(day => {

                const currentTime = timeToMinutes(time);


                const course = selected.find(item => {

                  const start = timeToMinutes(item.start);
                  const end = timeToMinutes(item.end);


                  return (
                    item.day === day &&
                    currentTime >= start &&
                    currentTime < end
                  );

                });


                return (

                  <td key={day}>

                    {course
                      ? `${course.course} ${course.id}`
                      : ""
                    }

                  </td>

                );

              })}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}


export default Timetable;