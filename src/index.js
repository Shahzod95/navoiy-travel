import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./index.css";

import Loader from "./components/Loader";
import { BrowserRouter as Router } from "react-router-dom";

const App = lazy(() => import("./Pages/App"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </React.StrictMode>
);
