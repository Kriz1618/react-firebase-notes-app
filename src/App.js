import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import Favorites from './components/notes/Favorites';
import EditForm from './components/notes/EditForm';
import NoteDetail from './components/notes/NoteDetail';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/editform/:id' element={<EditForm />} />
        <Route path='/note/:id' element={<NoteDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
