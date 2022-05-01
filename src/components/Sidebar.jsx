import "../Sidebar.css";

const Sidebar = props => {
    return (
        <div className="sidebar">
            <h1>Sidebar</h1>
            <ul id="list-items">
                <li><a href="*">Widget</a></li>
                <li><a href="*">Reviews</a></li>
                <li><a href="*">Customers</a></li>
                <li><a href="*">Settings</a></li>
            </ul>
        </div>
    )
}

export default Sidebar;