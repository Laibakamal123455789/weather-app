// import Search from '@/components/search/search'
// import Weather from '@/components/weather/weather'
// import React from 'react'


// export default function Page() {
//   return (
//     <div>
//      <Weather></Weather>
//      <Search></Search>
//     </div>
//   )
// }
"use client"
import React, { useState } from 'react';
import Search from '@/components/search/search';
import Weather from '@/components/weather/weather';

export default function Page() {
  const [city, setCity] = useState(""); // Manage the city state

  return (
    <div>
      <Search setCity={setCity} /> {/* Pass setCity to Search */}
      <Weather city={city} /> {/* Pass the city to Weather */}
    </div>
  );
}
