// import React, { useState } from 'react';
// import styles from './Location.module.css';

// const Location = ({ onAddressSubmit }) => {
//   const [address, setAddress] = useState('');

//   const handleChange = (e) => {
//     setAddress(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddressSubmit(address);
//   };


//   const [records, setRecords] = useState([]);
//   const [query, setQuery] = useState(''); // State to store the user's query

//   // Function to handle input changes and update the query state
//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

//   useEffect(() => {
//     // Construct the API URL with the query
//     const apiUrl = `http://localhost:5000/geocode?address=${address}`;

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         setRecords(data);
//         console.log(data);
//       })
//       .catch((err) => console.log(err));
//   }, [addressy]);



//   return (
//     <div className={styles['child-container']}>
//         <form onSubmit={handleSubmit}>
//           <input className='loc_bar' type='search' value={address} onChange={handleChange} placeholder='Enter Address...'/>
        
//         <button type="submit">Get Coordinates</button>
//       </form>
//     </div>
//   );
// };

// export default Location;



import React, { useState, useEffect } from 'react';
import styles from './Location.module.css';

const Location = ({ onAddressSubmit }) => {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({}); // Initialize coordinates as an empty object

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddressSubmit(address);
  };

  useEffect(() => {
    if (address.trim() === '') {
      // If the address is empty, reset the coordinates
      setCoordinates({});
      return;
    }

    // Construct the API URL with the query
    const apiKEY = 'XCGJHTOyfnJNUVdpObanFaU0VLJ-QeL3qwXiaAD7JEM'
    const url = `https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(address)}&limit=1&apiKey=${apiKEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          // Extract latitude and longitude from the first item in the response
          const { lat, lng } = data.items[0].position;
          setCoordinates({ latitude: lat, longitude: lng });
        } else {
          setCoordinates({});
        }
      })
      .catch((err) => console.error(err));
  }, [address]);

  return (
    <div className={styles['child-container']}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles['loc_bar']}
          type='search'
          value={address}
          onChange={handleChange}
          placeholder='Enter Address...'
        />
        <button type="submit">Get Coordinates</button>
      </form>

      <div>
        <h1>Data from Backend via Geocode</h1>
        {coordinates.latitude && coordinates.longitude ? (
          <p>
            Latitude: {coordinates.latitude} and Longitude: {coordinates.longitude}
          </p>
        ) : (
          <p>No coordinates found</p>
        )}
      </div>
    </div>
  );
};

export default Location;


