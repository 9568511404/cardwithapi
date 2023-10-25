import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

 export default function Culender() {
   const [date, changeDate] = useState(new Date());

   function changeValue(val) {
      changeDate(val);
   }

      return (
      <div>
         <Calendar
            onChange = {changeValue}
            value = {date}
            selectRange={true}
           
            // minDate = {new Date(2022, 8, 1)} // To set minimum date
            // maxDate = {new Date(2030, 12, 22)} // To set maximum date
            // showWeekNumbers = {true} // TO show week numbers
            showNeighboringMonth = {true} 
            calendarType = "US" // Changing the calender type
            // tileDisabled = {({ date }) => date.getDay() === 0} // Disabaling the sunday
         />
      </div>
   );
}








// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// export default function Culender() {
//   const [date, changeDate] = useState(new Date());
//   const [colors, setColors] = useState({}); // State to store selected colors

//   function changeValue(val) {
//     changeDate(val);
//   }

//   // Function to handle color selection for a specific date
//   function handleColorChange(date, selectedColor) {
//     setColors((prevColors) => ({
//       ...prevColors,
//       [date.toDateString()]: selectedColor,
//     }));
//   }

//   // Function to render a custom tile for each day with a color picker
//   function customTile({ date, view }) {
//     if (view === "month") {
//       const dateString = date.toDateString();
//       const selectedColor = colors[dateString] || "transparent";

//       return (
//         <div
//           className="custom-calendar-tile"
//           style={{ backgroundColor: selectedColor }}
//         >
//           <span
//             onClick={() => {
//               const selectedColor = prompt("Enter a color (e.g., red, #FF0000)");
//               if (selectedColor !== null) {
//                 handleColorChange(date, selectedColor);
//               }
//             }}
//           >
//             {date.getDate()}
//           </span>
//         </div>
//       );
//     }
//     return null;
//   }

//   return (
//     <div>
//       <Calendar
//         onChange={changeValue}
//         value={date}
//       //   tileContent={customTile}
//         calendarType="US"
//         showNeighboringMonth={true}
//         tileDisabled={({ date }) => date.getDay() === 0}
//       />
//     </div>
//   );
// }
