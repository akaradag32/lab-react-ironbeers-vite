import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomePage() {
    return (
  <>
  <Navbar/>
    <Link to="/beers">
      <p>All Beers</p>
    </Link>

    <Link to="/random-beer">
      <p>Random Beers</p>
    </Link>

    <Link to="/new-beer">
      <p>New Beer</p>
    </Link>
  </>
    )
}

export default HomePage;
