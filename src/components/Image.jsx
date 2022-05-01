import "../css/Image.css";

const Image = props => {
    return (
        <div className="image">
            <img src={props.img} alt={props.name} />
        </div>
    )
}

export default Image;