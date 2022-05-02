
import "../css/WebsiteVisitors.css";
import Image from "./Image";

const WebsiteVisitors = props => {
    return (
        <div className="website-visitors">
            <h1>{props.name}</h1>
            <p>{props.data1}</p>
            <Image img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPKZKf9EYsh4bpml8TO3npAdKffyuNWHntQ&usqp=CAU" name="Random People" />
        </div>
    )
}

export default WebsiteVisitors;