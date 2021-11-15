import React, { useState, useEffect, useContext } from "react";
import DiscographieList from "../ProjectList/ProjectList";
import { useParams } from "react-router-dom";

const HomePage = () => {
  return (
    <React.Fragment>
      <main className="content">
        <span>HomePage</span>
        <span>TESTTT</span>
        <DiscographieList />
      </main>
    </React.Fragment>
  );
};

export default HomePage;
