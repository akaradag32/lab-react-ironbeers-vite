import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL).then((response) => {
      setAllBeers(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + '/search?q=' + searchValue)
      .then((response) => {
        setAllBeers(response.data);
      });
  }, [searchValue]);

  return allBeers ? (
    <>
      <Navbar />
      <label> Search </label>
      <input
        name='search'
        type='text'
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      {allBeers.map((beer) => {
        return (
          <Link to={`/beers/${beer._id}`} key={beer._id}>
            <img
              style={{ height: '200px', margin: 'auto', display: 'block' }}
              src={beer.image_url}
            />
            <h2>{beer.name}</h2>
            <h4>{beer.tagline}</h4>
            <p>{beer.contributed_by}</p>
          </Link>
        );
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
