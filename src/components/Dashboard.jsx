import Reviews from "./Reviews";
import AverageRating from "./AverageRating";
import SentimentAnalysis from "./SentimentAnalysis";
import WebsiteVisitors from "./WebsiteVisitors";

const Dashboard = (props) => {
    return(
        <div className="dashboard">
            <Reviews reviews={1+","+282}/>
            <AverageRating />
            <SentimentAnalysis />
            <WebsiteVisitors />
        </div>
    )
}

export default Dashboard;