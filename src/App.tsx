import React from "react";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import "./assets/output.css";


const App: React.FC = () => (
  <Layout>
    <Home />
  </Layout>
);


export default App;
