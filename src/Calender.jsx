// src/components/Calendar.js

import React, { useState } from 'react';

function Calender() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const [time,setTime] =useState()

  const curentDate = new Date().toLocaleTimeString();


  const currentDat = new Date().toLocaleDateString();
     
 
    setInterval(()=>{
        setTime(
            curentDate
        )
    },1000)
  
    


  // Logic to generate the calendar for the current month goes here

  return (
    <div className="calendar">
      <h2>{ ` ${curentDate}`}</h2>
      <h1>{currentDat}</h1>
    </div>
  );
}

export default Calender;

