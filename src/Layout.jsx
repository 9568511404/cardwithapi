import React from 'react';
import './Style.css'; // Create a CSS file for styling
import FetchApi from './FetchApi';
import Attend from './Attend';

function Layout() {
  return (
    <div className="three-part-layout">
      <div className="left-part"  style={{flexGrow:"2"}} >Left Part</div>
      <div className="middle-part" style={{width:"80%"}}>Middle Part
      <br />
      <FetchApi/> 
      <br />
      <Attend/>
      </div>
      <div className="right-part" style={{flexGrow:"2"}}>Right Part</div>
    </div>
  );
}

export default Layout;