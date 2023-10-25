// import React, {useState, useEffect } from "react";
// import Chart from "react-apexcharts";

// function Barchart() {
// //   const [socialName, setsocialName]= useState([]);
// //   const [socialValue, setSocialValue]= useState([]);

// //   useEffect( ()=>{

// //     const socialMedianame=[];
// //     const socialMedivalue=[];

// //     const getSocialrecord= async()=>{
// //       const dataReq= await fetch("http://localhost/reactgraphtutorial/socialmedia");
// //       const dataRes= await dataReq.json();
// //       //console.log(dataRes);

// //       for(let i=0; i<dataRes.length; i++)
// //       {
// //         socialMedianame.push(dataRes[i].socialmedia_title);
// //         socialMedivalue.push(dataRes[i].socialmedia_subscriber);

// //       }
// //       setsocialName(socialMedianame);
// //       setSocialValue(socialMedivalue);
// //  }
// //   getSocialrecord();

// //   },[]);
  
//   return (
//     <React.Fragment>
//       <div className="container-fluid mb-5">
//         <h3 className="text-center mt-3 mb-3">Bar Chart in ReactJS</h3>
      
//         <Chart
//           type="bar"
//           width={650}
//           height={300}
//           series={[
//             {
//               name: "Social Media",
//               data: [300,800,200,100,600,500]
//             },
//           ]}
//           options={{
//             title: {
//               text: "Attend Seat",
//               style: { fontSize: 16 },
//             },

//             // subtitle: {
//             //   text: "This is BarChart Graph",
//             //   style: { fontSize: 18 },
//             // },

//             colors: ["#0000FF"],
//             theme: { mode: "light" },

//             xaxis: {
//               tickPlacement: "on",
//               categories: ["Jan","Feb","March","April","May","June"],
//             //   title: {
//             //     text: "Social Media User",
//             //     style: { color: "#f90000", fontSize: 30 },
//             //   },
//             },

//             yaxis: {
//                 labels: {
//                   formatter: (val) => {
//                   return `${val}`;
//                   },
//                 style: { fontSize: "15", colors: ["#00FF00"] },
//               },
//             //      title: {
//             //      text: "User In (K)",
//             //      style: { color: "#f90000", fontSize: 15 },
//             //   },
//             },

//             legend: {
//               show: true,
//               position: "right",
//             },

//             dataLabels: {
//               formatter: (val) => {
//                 return `${val}`;
//               },
//             //   style: {
//             //     colors: ["#f4f4f4"],
//             //     fontSize: 15,
//             //   },
//             },
//           }}
//         ></Chart>
//       </div>
//     </React.Fragment>
//   );
// }

// export default Barchart;



















import React from "react";
import Chart from "react-apexcharts";

function Barchart() {
  return (
    <>
      <div className="container-fluid mb-5">
        <h3 className="text-center mt-3 mb-3">Bar Chart in ReactJS</h3>

        <Chart
          type="bar"
          width={650}
          height={300}
          series={[
            {
              name: "Social Media",
              data: [300, 800, 200, 100, 600, 500],
            },
          ]}
          options={{
            title: {
              text: "Attend Seat",
              style: { fontSize: 16 },
            },
            colors: ["#0000FF"],
            theme: { mode: "light" },
            xaxis: {
              tickPlacement: "on",
              categories: ["Jan", "Feb", "March", "April", "May", "June"],
            },
            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["#00FF00"] },
              },
            },
            legend: {
              show: true,
              position: "right",
            },
            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
            },
          }}
        ></Chart>
      </div>
    </>
  );
}

export default Barchart;
