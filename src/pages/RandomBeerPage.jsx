import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

function RandomBeersPage() {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + '/random').then((response) => {
      setBeer(response.data);
      console.log(beer);
    });
  }, []);

  return beer ? (
    <>
      <Navbar />
      <img
        style={{
          height: '200px',
          margin: 'auto',
          display: 'block',
          marginTop: '20px',
        }}
        src={beer.image_url}
      />
      <h2>{beer.name}</h2>
      <h4>{beer.tagline}</h4>
      <p>{beer.first_brewed}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </>
  ) : (
    <h1>Loading...</h1>
  );
}

export default RandomBeersPage;
