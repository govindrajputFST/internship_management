import React from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import JobList from "./components/Joblist";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <header className="header">
        <h1>
          Search, Apply & <br /> Get Your <span className="highlight">Dream Jobs</span>
        </h1>
        <p>
        Make your dream career a reality
        </p>
        <SearchBar />
        <div className="job-buttons">
          <button className="btn">Frontend Developer</button>
          <button className="btn">Backend Developer</button>
        </div>
      </header>
      <JobList />
      <Footer />
    </div>
  );
};

export default App;
