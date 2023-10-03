import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style= {{backgroundColor: "lightblue"}}>
            <Link to="/">
                <img src="/src/assets/home-icon.png" alt="something"  />
            </Link>
        </nav>
    )
}

export default Navbar;
