import React from "react";
import ContactList from "../../components/ContactList/ContactList";
import Navbar from "../../components/Navbar/Navbar";

import "./Home.scss";

const Home = () => {
  return (
    <div className="app__home">
      <Navbar />
      <div>
        <ContactList />
      </div>
    </div>
  );
};

export default Home;
