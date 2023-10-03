import { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

function AddBeerPage() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirst_brewed] = useState('');
  const [brewers_tips, setBrewers_tips] = useState('');
  const [attenuation_level, setAttenuation_level] = useState('');
  const [contributed_by, setContributed_by] = useState('');
  const [responseX, setResponseX] = useState('');

  const handleForm = (event) => {
    event.preventDefault();

    axios
      .post(import.meta.env.VITE_API_URL + '/new', {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
      })
      .then((response) => {
        setResponseX(response.data);
        console.log(response.data);
      });
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleForm}>
        <label>Name </label>
        <input
          name='name'
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br></br>
        <label>tagline </label>

        <input
          name='tagline'
          type='text'
          value={tagline}
          onChange={(event) => setTagline(event.target.value)}
        />
        <br></br>
        <label>Description </label>

        <textarea
          name='description'
          type='text'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br></br>
        <label>First Brewed</label>

        <input
          name='first_brewed'
          type='text'
          value={first_brewed}
          onChange={(event) => setFirst_brewed(event.target.value)}
        />
        <br></br>
        <label>Brewer's Tips </label>

        <input
          name='brewers_tips'
          type='text'
          value={brewers_tips}
          onChange={(event) => setBrewers_tips(event.target.value)}
        />

        <br></br>
        <label>Attenuation Level </label>
        <input
          name='calories'
          type='number'
          value={attenuation_level}
          onChange={(event) => setAttenuation_level(event.target.value)}
        />

        <br></br>
        <label>Contributed By</label>
        <input
          name='contributed_by'
          type='text'
          value={contributed_by}
          onChange={(event) => setContributed_by(event.target.value)}
        />

        <br></br>
        <button type='submit'>Add Beer</button>
      </form>
    </>
  );
}

export default AddBeerPage;
