import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet
} from 'react-router-dom';
import Kuliner from "../Topics/Kuliner";
import ReviewHotel from "../Topics/ReviewHotel";
import Travelling from "../Topics/Travelling";

function Topics(){
    return(
      <div className="Topics">
        <ul>
          <li>
            <Link to="/topics/kuliner">Kuliner</Link>
          </li>
          <li>
            <Link to="/topics/review-hotel">Review Hotel</Link>
          </li>
          <li>
            <Link to="/topics/travelling">Travelling</Link>
          </li>
        </ul>

        <Outlet/>
      </div>
    );
}

export default Topics;