import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  /*    console.log(import.meta.env.VITE_API_URL); */
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL).then((response) => {
      setAllBeers(response.data);
/*       console.log(allBeers); */
    });
  }, []);

  return allBeers ? (
    <>
      <Navbar />
      {allBeers.map((beer) => {
        return (
            <Link to={`/beers/${beer._id}`} key={beer._id}>
                <img style={{height : "200px"}} src={beer.image_url}  />
                <h2>{beer.name}</h2>
                <h4>{beer.tagline}</h4>
                <p>{beer.contributed_by}</p>
            </Link>
        )
      })}
    </>
  ) : (
    <h1>Loading...</h1>
  );
  
}

export default AllBeersPage;

/* image

name

tagline

contributed_by */


