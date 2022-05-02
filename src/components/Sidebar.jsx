import "../css/Sidebar.css";

const Sidebar = props => {
    return (
        <div className="sidebar">
            <h1>Sidebar</h1>
            <ul id="list-items">
                <li><a href="*">{props.widget}</a></li>
                <li><a href="*">{props.reviews}</a></li>
                <li><a href="*">{props.customers}</a></li>
                <li><a href="*">{props.settings}</a></li>
            </ul>
        </div>
    )
}

export default Sidebar;