// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './AllRoutes';

//<Route path="/search">
function App() {
    return (
      <Router >
        <div className="App">
          <AllRoutes />
        </div>
      </Router>
    );
}

export default App;
