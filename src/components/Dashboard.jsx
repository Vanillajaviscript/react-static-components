import React from "react";
import Reviews from "./Reviews";
import AverageRating from "./AverageRating";
import SentimentAnalysis from "./SentimentAnalysis";
import WebsiteVisitors from "./WebsiteVisitors";
import Sidebar from "./Sidebar";
import "../Dashboard.css";
const Dashboard = (props) => {
    return(
        <div className="dashboard">
            <Reviews />
            <AverageRating />
            <SentimentAnalysis data1={960} data2={122} data3={321} />
            <WebsiteVisitors />
            <Sidebar />
        </div>
    )
}

export default Dashboard;