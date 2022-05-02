import React from "react";
import "../css/Reviews.css";

const Reviews = props => {
    return (
        <div className="reviews">
            <h1>{props.name}</h1>
            <p>{props.data1}</p>
        </div>
    )
}

export default Reviews;