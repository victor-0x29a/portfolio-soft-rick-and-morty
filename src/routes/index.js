import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import NotFound from "../pages/notfound";

// Components
import SocialComponent from "../components/social";

// Data
import SocialMedias from "../data/social";

export default class Rotas extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <SocialComponent data={SocialMedias} />
      </React.Fragment>
    );
  }
}
