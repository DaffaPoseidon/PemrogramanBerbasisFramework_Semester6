import React from "react";
import {
    useParams,
} from 'react-router-dom';

function ReviewHotel(){
    let {id} = useParams();
    return(
        <h2>
            Ibis, JW Marriot
        </h2>
    );
}

export default ReviewHotel;