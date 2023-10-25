// import React, { useState, useEffect } from 'react';

// function FetchApi() {
//     const [data, setData] = useState(null);
  
//     useEffect(() => {
//       // Function to fetch data from the API
//       const fetchData = async () => {
//         try {
//           const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//           const result = await response.json();
  
//           // Simulate a 5-second delay
//           setTimeout(() => {
//             setData(result);
//           }, 5000);
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       };
  
//       // Call the fetchData function when the component mounts
//       fetchData();
//     }, []);
  
//     return (
//       <div>
//         {data ? (
//           <div>
//             {/* Display the fetched data here */}
//             <p>{data.title}</p>
//             {/* Add more elements to display other data properties */}
//           </div>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     );
//   }
  
//   export default FetchApi;

  
import React, { useState, useEffect } from 'react';

function FetchApi() {
    const [data, setData] = useState(false);
    const [output,setOutput] =useState([])
    useEffect(() => {
      const fetchData = async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          const result = await response.json();
          setTimeout(() => {
            setData(true)
            setOutput(result)
           }, 3000);
      };
      fetchData();
    }, []);
    
    const [currentPage,setCurrentPage] = useState(1)
    const recordPerPage =10;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex-recordPerPage;
    const record = output.slice(firstIndex,lastIndex)
    const npage= Math.ceil(output.length/recordPerPage)
    const numbers =[...Array(npage+1).keys()].slice(1)
    function perPage (e){
      e.preventDefault()
      if (currentPage!==1){
        setCurrentPage(currentPage-1)
      }
    }
    function nextPage(e){
      e.preventDefault()
    if (currentPage!==npage){
      setCurrentPage(currentPage+1)
    }
    }
    function  changeCurrentP(id,e){
      e.preventDefault()
      setCurrentPage(id)
    }
 return (
      <div>
        {data ?  <div>
        {
            record.map((item,indx)=>{
                return (<li key={indx}>{item.userId} - {item.id} - {item.title}</li>) 
            })
        }
         </div> : (
            <p>Loading...</p> 
        )}
 <nav >
  <ul style={{display:"flex",listStyle:"none",justifyContent:"space-around",textDecoration:"none"}}>
    <li className='page-item'>
      <a href="" onClick={(e)=>perPage(e)} className='link'>Prev</a>
    </li>
    {/* {
      numbers.map((n,i)=>{
        return(
          <>
            <li className={`page-item ${currentPage == n ? "active" : " "}`} key={i}>
              <a href=" " onClick={(e)=>changeCurrentP(n,e)} className='link'>{n}</a>
            </li>
          </>
        )
      })
    } */}
    <li className='page-item'>
      <a href="" onClick={(e)=>nextPage(e)} className='link'>Next</a>
    </li>
  </ul>
</nav>
      </div>
    );
  }
  
  export default FetchApi;

  