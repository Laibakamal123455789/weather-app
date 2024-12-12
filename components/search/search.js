"use client";
import React, { useState } from 'react';
import"./search.css"

export default function Search({ setCity }) {
  const [cityInput, setCityInput] = useState("");
  const [error, setError] = useState("");

 
  const handleInput = (e) => {
    setCityInput(e.target.value);
  };

 
 const handleSearch = (e) => {
    e.preventDefault();
    if (cityInput.trim() === "") {
      setError("City name cannot be empty!");
    } else {
      setError(""); // Clear error
      setCity(cityInput.trim().toLowerCase()); // Normalize input before passing it
    }
  };





  

  return (
    <div className='search'>
      <div className="search-input">
        <input
          type="text"
          placeholder='Enter Your City'
          onChange={handleInput}
          value={cityInput}
          required
        />
        <button onClick={handleSearch}>Search</button>
      </div>

     
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}








// "use client"
// import React, { useState } from 'react'
// import"./search.css"

// export default function Search({setCity}) {
//   let [cityInput, setCityInput] = useState("");
//   const handleInput=(e)=>{
//      setCityInput(e.target.value)

//   }
//  const handleSubmit = (e)=>{
//   e.preventDefault();
//   setCity(cityInput)
//  }

//   return (
//     <div className='search'>
//       <form onSubmit={handleSubmit} >
//       <input type="text" placeholder='Enter Your City' onChange={handleInput} value={cityInput} required />
//       <button type='submit'>Search</button>

//       </form>
      
//     </div>
//   )
// }





