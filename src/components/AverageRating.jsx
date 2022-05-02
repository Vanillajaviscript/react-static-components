import "../css/AverageRating.css";

const AverageRating = props => {
    return (
    <div className="average-rating">
        <h1>{props.name}</h1>
        <p>{props.rating}</p>
    </div>
    )
}

export default AverageRating;