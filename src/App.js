// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Signup from './components/signup';
// import Profile from './components/profile'; 
// import Select from './components/select';
// // import './App.css'
// import Email from './components/email';
// function App() {
  
//   return (
//     <Router>
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Signup />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/select" element={<Select />} /> 
//           <Route path="/email" element={<Email />} /> {/* Corrected: Use Profile instead of profile */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
// App.js

// App.js
// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/profile'; 
import Select from './components/select';
import Email from './components/email';
import Signup from './components/signup';
function App() {
  const [avatarImage, setAvatarImage] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Route for Profile component */}
        <Route path="/" element={<Signup />} />
        <Route path="/profile" element={<Profile avatarImage={avatarImage} setAvatarImage={setAvatarImage} />} />
        <Route path="/select" element={<Select />} /> 
        {/* Route for Email component */}
        <Route path="/email" element={<Email avatarImage={avatarImage} />} />
      </Routes>
    </Router>
  );
}

export default App;

