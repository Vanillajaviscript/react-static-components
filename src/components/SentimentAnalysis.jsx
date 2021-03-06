import "../css/SentimentAnalysis.css";

const SentimentAnalysis = props => {
    return (
        <div className="sentiment-analysis">
            <h1>{props.name}</h1>
            <ul>
                <li>{props.data1}</li>
                <li>{props.data2}</li>
                <li>{props.data3}</li>
            </ul>
        </div>
    )
}

export default SentimentAnalysis;