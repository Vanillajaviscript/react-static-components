import React from "react";
import Reviews from "./Reviews";
import AverageRating from "./AverageRating";
import SentimentAnalysis from "./SentimentAnalysis";
import WebsiteVisitors from "./WebsiteVisitors";
import Sidebar from "./Sidebar";
import "../css/Dashboard.css";

const Dashboard = (props) => {
    return(
        <div className="dashboard">
            <Reviews name="Reviews" data1={1+","+281}/>
            <AverageRating name="Average Rating" rating={4.6} />
            <SentimentAnalysis data1={960} data2={122} data3={321} name="Sentiment Analysis"  />
            <WebsiteVisitors name="Website Visitors" data1={821}/>
            <Sidebar widget="Widget" reviews="Reviews" customers="Customers" settings="Settings"/>
        </div>
    )
}

export default Dashboard;