import { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import "./assets/output.css";

const App: FC = () => (
  <Layout>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Home />
    </ErrorBoundary>
  </Layout>
);
