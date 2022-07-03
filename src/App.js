import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import NewPersonForm from './Components/NewPersonForm';
import Display from './Components/Display';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/person/:id' element={<Display />} />
          <Route path='/new' element={<NewPersonForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// navbar (home button)
//home page - show all the users' names
//display page - displays all of a persons' info
// --- has a button to delete person
// create person page - create a person