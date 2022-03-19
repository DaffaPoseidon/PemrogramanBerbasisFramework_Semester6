import React from "react";
import {
    useParams,
} from 'react-router-dom';

function Travelling(){
    let {id} = useParams();
    return(
        <h2>
            Wisata alam, Museum
        </h2>
    );
}

export default Travelling;