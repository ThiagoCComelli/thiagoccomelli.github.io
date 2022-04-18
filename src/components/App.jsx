import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar'
import Home from '../pages/Home/Home'
import Projects from '../pages/Projects/Projects'
import About from '../pages/About/About'
import './App.css';
import ProjectSubPage from '../pages/ProjectSubPage/ProjectSubPage'
import { ModalProvider } from '../utils/modal-contexts';

const App = () => {
  return (
    <>
    <ModalProvider>
      <div className="App">
        <Router basename={`${process.env.PUBLIC_URL}`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/projects/:projectName" element={<ProjectSubPage />}/>
            <Route path="/about" element={<About />}/>
          </Routes>
        </Router>
      </div>
    </ModalProvider>
    </>
  );
}

export default App;